const { apiRoot, projectKey } = require("./client.js");

module.exports.createCart = async (cartDraftData) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .carts()
    .post({
      body: await createCartDraft(cartDraftData),
    })
    .execute();
};

const createCartDraft = (cartDraftData) => {
  const { currency, customerId, countryCode } = cartDraftData;

  return {
    currency,
    customerId,
    shippingAddress: {
      country: countryCode,
    },
  };
};

module.exports.customerSignIn = async (customerDetails) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .login()
    .post({ body: customerDetails })
    .execute();
};

module.exports.getCartById = (ID) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .carts()
    .withId({ ID })
    .get()
    .execute();
};

module.exports.addLineItemsToCart = async (arrayOfLineItems, cartId) => {
  const currentCart = await this.getCartById(cartId);

  let updateActions = [];

  arrayOfLineItems.map((lineItem) => {
    updateActions.push({
      action: "addLineItem",
      sku: lineItem.sku,
      quantity: lineItem.quantity,
    });
  });

  return apiRoot
    .withProjectKey({ projectKey })
    .carts()
    .withId({ ID: cartId })
    .post({
      body: {
        version: currentCart.body.version,
        actions: updateActions,
      },
    })
    .execute();
};

module.exports.addDiscountCodeToCart = async (discountCode, cartId) => {
  const cart = await this.getCartById(cartId);

  const updateActions = [
    {
      action: "addDiscountCode",

      code: discountCode,
    },
  ];
  return apiRoot
    .withProjectKey({ projectKey })
    .carts()
    .withId({ ID: cartId })
    .post({
      body: {
        version: cart.body.version,
        actions: updateActions,
      },
    })
    .execute();
};

module.exports.createOrderFromCart = (cartId) => {};

const createOrderFromCartDraft = (cartId) => {
  return this.getCartById(cartId).then((cart) => {
    return {
      id: cart.body.id,
      version: cart.body.version,
    };
  });
};

module.exports.getOrderById = (ID) => {};

module.exports.updateOrderCustomState = (customStateId, orderId) => {};

module.exports.createPayment = (paymentDraft) => {};

module.exports.setOrderState = (stateName, orderId) => {};

module.exports.addPaymentToOrder = (paymentId, orderId) => {};

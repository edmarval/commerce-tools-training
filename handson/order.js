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

module.exports.customerSignIn = (customerDetails) => {};

module.exports.getCartById = async (ID) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .carts()
    .withId({ ID })
    .get()
    .execute();
};

module.exports.addLineItemsToCart = async (arrayOfSKUs, cartId) => {
  const currentCart = await this.getCartById(cartId);

  let updateActions = [];

  arrayOfSKUs.map((itemSku) => {
    updateActions.push({
      action: "addLineItem",
      sku: itemSku,
      quantity: 2,
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

module.exports.addDiscountCodeToCart = (discountCode, cartId) => {};

module.exports.createOrderFromCart = (cartId) => {};

const createOrderFromCartDraft = (cartId) => {
  return getCartById(cartId).then((cart) => {
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

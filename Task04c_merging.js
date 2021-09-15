const checkout = require("./handson/order");
const { log } = require("./logger.js");

const cartDraftData = {
  currency: "EUR",
  //customerId: "10cb16bf-a5d8-4f47-b664-fe5cae2f75d0",
  countryCode: "DE",
};

const cartDraftData2 = {
  currency: "EUR",
  customerId: "10cb16bf-a5d8-4f47-b664-fe5cae2f75d0",
  countryCode: "DE",
};

const mergingProcessTest = async () => {
  let anonymousCart = await checkout.createCart(cartDraftData);

  let customerCart = await checkout.createCart(cartDraftData2);

  const lineItemsToAddToAnonymousCart = [
    {
      sku: "em-SKU101",
      quantity: 1,
    },
  ];

  const lineItemsToAddToCustomerCart = [
    {
      sku: "em-SKU102",
      quantity: 3,
    },
  ];

  anonymousCart = await checkout.addLineItemsToCart(
    lineItemsToAddToAnonymousCart,
    anonymousCart.body.id
  );

  customerCart = await checkout.addLineItemsToCart(
    lineItemsToAddToCustomerCart,
    customerCart.body.id
  );
  log("Anonymouse Cart Id: " + anonymousCart.body.id); // look it up in impex you will see it's merged
  log("Customer Cart Id: " + customerCart.body.id);
};
// mergingProcessTest();

const customerSignIn = async (anonymousCartId) => {

};

customerSignIn("cec67165-073c-4d07-828d-bd4223a77a0a").then(log).catch(log);

const { apiRoot, projectKey } = require("./client.js");

module.exports.getCustomerById = (ID) => {};

module.exports.getCustomerByKey = (key) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .withKey({ key })
    .get()
    .execute();
};

const createCustomerDraft = (customerData) => {
  const { firstName, lastName, email, password, key, countryCode } =
    customerData;

  const customerDraft = {
    firstName,
    lastName,
    email,
    password,
    key,
    countryCode,
    addresses: [
      {
        country: countryCode,
      },
    ],
    defaultShippingAddress: 0,
    defaultBillingAddress: 0,
  };
  return customerDraft;
};

module.exports.createCustomer = async (customerData) => {
  const customerDraft = createCustomerDraft(customerData);

  return apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .post({
      body: {
        ...customerDraft,
      },
    })
    .execute();
};

const createCustomerDraftKey = (customerData) => {};

module.exports.createCustomerKeyVerfiedEmail = (customerData) => {};

module.exports.assignCustomerToCustomerGroup = async (
  customerKey,
  customerGroupKey
) => {
  const customer = await this.getCustomerByKey(customerKey);

  const updateActions = [
    {
      action: "setCustomerGroup",
      customerGroup: {
        key: customerGroupKey,
      },
    },
  ];

  return apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .withKey({ key: customerKey })
    .post({
      body: {
        version: customer.body.version,
        actions: updateActions,
      },
    })
    .execute();
};

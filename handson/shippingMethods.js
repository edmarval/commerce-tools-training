const { apiRoot, projectKey } = require("./client.js");

module.exports.getShippingMethodById = async (ID) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .shippingMethods()
    .withId({ ID })
    .get()
    .execute();
};

const { apiRoot, projectKey } = require("./client.js");

module.exports.getTaxCategoryByKey = async (key) => {
  return apiRoot
    .withProjectKey({ projectKey })
    .taxCategories()
    .withKey({ key })
    .get()
    .execute();
};

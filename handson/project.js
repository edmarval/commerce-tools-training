const { apiRoot, projectKey } = require("./client.js");

module.exports.getProject = async () => {
  return apiRoot.withProjectKey({ projectKey }).get().execute();
};

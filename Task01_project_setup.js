const { getProject } = require("./handson/project.js");
const { getShippingMethodById } = require("./handson/shippingMethods");
const { getTaxCategoryByKey } = require("./handson/taxCategory.js");
const { log } = require("./logger.js");

// TODO 1: Complete the functions in
// ./handson/client.js
// ./handson/project.js
// ./handson/taxCategory.js
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

// getProject().then(log).catch(log);

// getShippingMethodById("55f5722d-6bf1-493f-8f3c-75f2883c676f")
//   .then(log)
//   .catch(log);

getTaxCategoryByKey("default-tax").then(log).catch(log);

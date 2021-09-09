const {
  createCustomer,
  getCustomerById,
  getCustomerByKey,
  createCustomerKeyVerfiedEmail,
  assignCustomerToCustomerGroup,
} = require("./handson/customer");
const { log } = require("./logger.js");

const customerSampleData = {
  firstName: "John",
  lastName: "Wick",
  email: "jhon@wick.com",
  password: "123",
  key: "jhon_wick_123",
  countryCode: "DE",
};

// createCustomer(customerSampleData).then(log).catch(log);

//getCustomerByKey('test123').then(log).catch(log);

// getCustomerById("10cb16bf-a5d8-4f47-b664-fe5cae2f75d0").then(log).catch(log);

//createCustomerKeyVerfiedEmail(customerSampleData).then(log).catch(log);

assignCustomerToCustomerGroup("jhon_wick_123", "indoor").then(log).catch(log);

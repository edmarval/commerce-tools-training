const states = require("./handson/states");
const { log } = require("./logger.js");

const orderStartedStateDraftData = {
  key: "em-order-started",
  type: "OrderState",
  name: {
    "de": "Order Started ",
  },
  initial: true,
};

const orderProcessedStateDraftData = {
  key: "em-order-processed",
  type: "OrderState",
  name: {
    "de": "Order Processed ",
  },
  initial: false,
};

states.createNewState(orderProcessedStateDraftData).then(log).catch(log)

// states.getStateById("bddd6db3-06e6-40f7-86f0-ff7adc9d6fbf").then(log).catch(log)

//states.addTransition("eb35b1d8-9cad-478f-a7a6-11d95cc5e79a", "a5f8b4bd-6314-4f4e-acbb-780ac3e3772e").then(log).catch(log)

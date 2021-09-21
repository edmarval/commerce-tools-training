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

// states.createNewState(orderProcessedStateDraftData).then(log).catch(log)

// states.getStateById("bddd6db3-06e6-40f7-86f0-ff7adc9d6fbf").then(log).catch(log)

states.addTransition("bddd6db3-06e6-40f7-86f0-ff7adc9d6fbf", "45e1808a-7026-4041-8e1f-9527a9d93773").then(log).catch(log)

const { apiRoot, projectKey } = require("./client.js");

module.exports.createNewState = (stateDraftData) =>{

  return apiRoot
  .withProjectKey({ projectKey })
  .states()
  .post({ body: createStateDraft(stateDraftData) })
  .execute();
}

const createStateDraft = (stateDraftData) => {
  const { key, type, name, initial } = stateDraftData;
  return {
    key,
    type,
    name,
    initial,
  };
};

module.exports.getStateByKey = (key) =>{}

module.exports.getStateById = (ID) =>{
  return apiRoot
  .withProjectKey({ projectKey })
  .states()
  .withId({ ID })
  .get()
  .execute();
}

module.exports.addTransition = (stateId, transitionStateId) => {}

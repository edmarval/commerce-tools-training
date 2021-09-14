 const {
  createImportContainer,
  importProducts,
  checkImportOperationStatus,
} = require("./handson/importService");
const { log } = require("./logger.js");

// createImportContainer({
//   key: "em-productsImporterContainer",
//   resourceType: "product-draft",
// })
//   .then(log)
//   .catch(log);

// importProducts("em-productsImporterContainer").then(log).catch(log);
// checkImportOperationStatus("5532364b-120e-45e9-a3ef-eacbc3665b28")
//   .then(log)
//   .catch(log);
checkImportOperationStatus("09f90e41-fc7e-4d51-be87-a430228952c8")
  .then(log)
  .catch(log);

//https://github.com/commercetools/commercetools-project-sync#run
// docker run \
// -e SOURCE_PROJECT_KEY= \
// -e SOURCE_CLIENT_ID= \
// -e SOURCE_CLIENT_SECRET= \
// -e TARGET_PROJECT_KEY= \
// -e TARGET_CLIENT_ID= \
// -e TARGET_CLIENT_SECRET= \
// commercetools/commercetools-project-sync:3.10.1 -s all

// import getSessions, {
//   sessionTemplate,
//   sessionURL,
// } from "./sessionRepository.js"; // default import from sessionImport, and named import from it, in this case, is the aggregation exported stuff
import getSessions, * as sessionRepository from "./sessionRepository.js"; // default import from sessionImport, and named import from it, in this case, is the aggregation exported stuff
// import { sessionTemplate as template, errorMessage } from "./template.js"; // Named import
// import * as template from "./template.js"; // Named import

function render() {
  var list = document.querySelector("#sessions");
  if (!list) return;
  list.innerHTML = sessionRepository.sessionTemplate(data.listItems);
}

var data = {
  listItems: [],
};

getSessions().then((sessions) => {
  console.log("promises!");
  data.listItems = sessions;
  render();
});

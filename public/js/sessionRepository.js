const sessionURL = "sessions.json";

let sessionList = [];

// When you import this file somewhere, you will get this function
// export default function getSessions() { <-- Default Export
function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      sessionList = e.target.response;
      resolve(sessionList);
    };
    oReq.open("GET", sessionURL, true);
    oReq.responseType = "json";
    oReq.send();
  });
}

export { getSessions as default, sessionURL }; // <- Default export and Named export

// export { getSessions as sessions }; // <-- Named export as a list and renaming something
// export { getSessions }; // <-- Named export as a list

export { sessionTemplate } from "./template.js"; // Aggregation export

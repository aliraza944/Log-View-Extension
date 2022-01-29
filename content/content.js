console.log("this is working");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.message) {
    case "data required":
      sendResponse({ farewell: "data sent" });
      break;
    case "hello":
      sendResponse({ farewell: "button clicked" });
      break;
    default:
      break;
  }
});

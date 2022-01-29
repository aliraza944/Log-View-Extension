console.log("this is the end");
chrome.action.onClicked.addListener((tabs) => {
  // Send a message to the active tab

  chrome.tabs.sendMessage(tabs.id, { greeting: "hello" }, (response) => {
    console.log(response.farewell);
  });
});

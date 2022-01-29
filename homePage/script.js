const example = document.getElementById("example");

example.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, (response) => {
      console.log(response.farewell);
    });
  });
});

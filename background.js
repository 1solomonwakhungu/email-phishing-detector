// // Listener that gets triggered when the user clicks on the extension icon
// chrome.action.onClicked.addListener((tab) => {
//     // Inject content script into the current tab
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['content.js']
//     });
// });

// // Listener for receiving data from content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'readPageData') {
//         console.log('Page content:', message.data);
//         // You can process the data further here
//     }
// });

// Function to execute when the user clicks the extension icon
chrome.action.onClicked.addListener(() => {
  // Get the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Inject content script into the active tab
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getPageContent,
    });
  });
});

// Function to receive data from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "readPageData") {
    window.console.log("Page content:", message.data);
    console.log("Page content:", message.data);
    // You can process or store the data here
  }
});

// This function will be injected into the active tab to get the page content
function getPageContent() {
  // Get the page content (body text)
  const pageData = document.body.innerText;

  // Send the content back to the background script
  chrome.runtime.sendMessage({
    action: "readPageData",
    data: pageData,
  });
}

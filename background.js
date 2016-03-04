chrome.browserAction.onClicked.addListener(function(tab) {
    var newURL = "http://console.flite.com/make_component.action?forwardTemplate=&item=78629e82-7e9d-441d-bcbe-c0faaebab08d&name=New%20Blank%20Ad";
    chrome.tabs.create({
        url: newURL,
        index: tab.index+1
    });
});

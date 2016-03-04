if (!localStorage.isInitialized) {
    localStorage.newAdGuid = "78629e82-7e9d-441d-bcbe-c0faaebab08d";
    localStorage.newAdEnv = "production";
    localStorage.isInitialized = true;
}

var env;
switch (localStorage.newAdEnv) {
    case "stage":
        env = "console-stage.postapp.com";
        break;
    case "qa":
        env = "qa-console.postapp.com";
        break;
    default:
        env = "console.flite.com";
}

chrome.browserAction.onClicked.addListener(function(tab) {

    var newURL = "http://"+env+"/make_component.action?forwardTemplate=&item="+localStorage.newAdGuid+"&name=New%20Blank%20Ad";
    chrome.tabs.create({
        url: newURL,
        index: tab.index+1
    });
});

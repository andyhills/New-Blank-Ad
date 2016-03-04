window.addEventListener('load', function() {
    //initialize controls
    options.newAdGuid.value = localStorage.newAdGuid;
    options.newAdEnv.value = localStorage.newAdEnv;

    //update on new values
    options.newAdGuid.onchange = function() {
        localStorage.newAdGuid = options.newAdGuid.value;
    };
    options.newAdEnv.onchange = function() {
        localStorage.newAdEnv = options.newAdEnv.value;
    };
});

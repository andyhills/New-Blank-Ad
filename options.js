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

    window.document.getElementById('reset').addEventListener('click', function() {
      options.newAdGuid.value = "78629e82-7e9d-441d-bcbe-c0faaebab08d";
      options.newAdEnv.value = "production";
      localStorage.newAdGuid = options.newAdGuid.value;
      localStorage.newAdEnv = options.newAdEnv.value;
    });
});

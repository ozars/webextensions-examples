let xpiUrl  = document.getElementById('xpi-url');
let installButton = document.getElementById('install-button');
let statusText  = document.getElementById('status-text');

function installXPI() {
  let url = xpiUrl.value;
  console.log("Downloading " + url);
  browser.management.install({url}).then((ret) => {
    statusText.innerHTML = "Success: " + JSON.stringify(ret);
  }, (err) => {
    statusText.innerHTML = "Error: " + err;
  });
}

installButton.addEventListener('click', installXPI);

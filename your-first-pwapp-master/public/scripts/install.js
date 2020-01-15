'use strict';

let InstallPromptevt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installCORapp);

//this event ie raised if the app hasnt been installed yet
window.addEventListener('beforeinstallprompt', BeforeInstallPromptEvent);
function BeforeInstallPromptEvent(evt) {
  InstallPromptevt = evt;
  installButton.removeAttribute('hidden');
}


// Event handler for butInstall - Does the PWA installation.
function installCORapp(evt) {
  InstallPromptevt.prompt();
  evt.srcElement.setAttribute('hidden', true);

  InstallPromptevt.userChoice.then(() => { InstallPromptevt = null;});
}


window.addEventListener('appinstalled', appInstalledhandler);
function appInstalledhandler(evt) {}//do some one time work on install if neccary

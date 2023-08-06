const butInstall = document.getElementById("buttonInstall");

console.log('install.js working');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;

  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  console.log('I have been clicked');
  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
  console.log('Working');
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
var button = document.querySelector(".popup_button");
button.addEventListener('click', () => {
    chrome.tabs.create({active: true, url: 'https://ithub.bulgakov.app/conspectus'});
});
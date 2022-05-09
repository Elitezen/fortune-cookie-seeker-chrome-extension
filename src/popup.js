'use strict';
import './popup.css';
import $ from 'jquery';
// import { getFortune } from 'fortune-cookie-generator';

const cookieButtonStyles = {
  backgroundColors: {
    available: 'lightgreen',
    notAvailable: 'lightgray'
  },
  texts: {
    available: 'Open Cookie!',
    notAvailable: 'No Cookie Found'
  }
};

const footerTexts = {
  available: 'Click To Open',
  notAvailable: 'You will be notified when a cookie has been found.'
};

const cookieImg = $('#cookie-img');
const openCookieBtn = $('#open-cookie-btn');
const footer = $('footer');

const storage = {
  set: (key, val) => chrome.storage.sync.set({[key]:val}),
  get: async(key) => (await chrome.storage.sync.get([key]))[key],
};

(async function() {
  cookieAvailable();
  openCookieBtn.on('click', openCookie);
})();

function cookieAvailable() {
  cookieImg.css('opacity', 1);
  openCookieBtn
    .css('background-color', cookieButtonStyles.backgroundColors.available)
    .text(cookieButtonStyles.texts.available);
  footer.text(footerTexts.available);
}

function cookieNotAvailable() {
  cookieImg.css('opacity', 0.2);
  openCookieBtn
    .css('background-color', cookieButtonStyles.backgroundColors.notAvailable)
    .text(cookieButtonStyles.texts.notAvailable);
  footer.text(footerTexts.notAvailable);
}

function openCookie() {
  alert('(Fortune Here)');
  cookieNotAvailable();
}
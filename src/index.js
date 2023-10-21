import {
  loadHeader, loadMainPage, loadMenuPage, loadContactPage,
} from './load_page';

function removeBody() {
  const body = document.querySelector('#body-container');
  body.remove();
}
const content = document.querySelector('#content');

content.appendChild(loadHeader());

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
  removeBody();
  content.appendChild(loadMainPage());
});

menu.addEventListener('click', () => {
  removeBody();
  content.appendChild(loadMenuPage());
});

contact.addEventListener('click', () => {
  removeBody();
  content.appendChild(loadContactPage());
});

content.appendChild(loadMainPage());

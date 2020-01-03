document.title = 'Fruits & Vegetables Corp';

const firstHeader = document.getElementsByTagName('h1');
firstHeader[0].textContent = 'Fruits & Vegetables Corp';

const lastHeaderList = document.getElementsByTagName('a');
lastHeaderList[2].textContent = 'Vegetables';
lastHeaderList[2].setAttribute('href', 'Vegetables');

const contactSection = document.getElementById('contact');
const newContactElement = document.createElement('h2');
const contactName = document.createTextNode('Contact');

contactSection.appendChild(newContactElement);
newContactElement.appendChild(contactName);

contactSection.insertBefore(newContactElement, contactSection.firstChild);

const aboutSection = document.getElementById('about');
aboutSection.textContent = '';
const newAboutElement = document.createElement('h2');
const aboutName = document.createTextNode('About');

aboutSection.appendChild(newAboutElement);
newAboutElement.appendChild(aboutName);

const mainSection = document.getElementById('main');
mainSection.insertBefore(aboutSection, mainSection.firstChild);

const wrapp = document.createElement('p');
wrapp.textContent = "We're the best in fruits & vegetables";
aboutSection.appendChild(wrapp);

const ElementType = document.createElement('th');
const IncorrectType = document.getElementsByTagName('td')[0];
ElementType.textContent = 'Name';
IncorrectType.replaceWith(ElementType);

const secondElementType = document.createElement('th');
const secondIncorrectType = document.getElementsByTagName('td')[0];
secondElementType.textContent = 'Email';
secondIncorrectType.replaceWith(secondElementType);

const CSSFile = document.createElement('link');

CSSFile.rel = 'styleSheet';
CSSFile.type = 'text/css';
CSSFile.href = 'main.css';

document.head.appendChild(CSSFile);
const doc = document;

const nameUser = doc.querySelector('.nameUser');
const proffUser = doc.querySelector('.proffUser');
const contactUser = doc.querySelector('.contactUser');
const ageUser = doc.querySelector('.ageUser');
const cityUser = doc.querySelector('.cityUser');
const infoUser = doc.querySelector('.infoUser');



nameUser.innerHTML = `
    <h2>Привет, меня зовут:</h2>
    <h3>${prompt('Введите Ваше имя и фамилию:')}.</h3>
    `;

proffUser.innerHTML = `
<h2>Моя сфера деятельности:</h2>
<p> ${prompt('Введите Вашу сферу деятельности')}.</p>
`;

contactUser.innerHTML = `
    <h2>Мои контакти:</h2>
    <p> ${prompt('Введите Ваши контакты:')}.</p>
    `;

ageUser.innerHTML = `
    <h2>Мой возраст:</h2>
    <p> ${prompt('Введите Ваш возраст:')}.</p>
    `;

cityUser.innerHTML = `
<h2>Я живу в городе:</h2>
<p> ${prompt('Введите Ваш город:')}.</p>
`;


infoUser.innerHTML = `
    <h2> Обо мне </h2>
    <p> ${prompt('Введите подробную информацию о Вас')}.</p>
    `;

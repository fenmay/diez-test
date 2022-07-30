export class Header {

    static getHeader() {
        const body = document.getElementsByTagName('body')[0];
        
        body.insertAdjacentHTML(
            'afterbegin',
            `<div class="header">
                <div class="header__logo">
                    <img src="./src/img/logo.png" alt="logo">
                </div>
                <div class="header__menu">
                    <div class="header__menu-item"><a href="/">Главная</a></div>
                    <div class="header__menu-item"><a href="#">О нас</a></div>
                    <div class="header__menu-item"><a href="#">Мероприятия</a></div>
                    <div class="header__menu-item"><a href="#">Новости</a></div>
                </div>
                <div class="header__actions">
                    <button id="useful"># Полезное</button>
                    <button id="account">Личный кабинет</button>
                </div>
            </div>`
        );

        const logo = document.querySelector('.header__logo');
        const menuItems = document.querySelectorAll('.header__menu-item');
        const useful = document.getElementById('useful');
        const account = document.getElementById('account');

        for (let i = 0; i < menuItems.length; i++) {
            const element = menuItems[i];

            element.innerText === document.title ? element.classList.add('menu_active') : null;        
        };

        logo.onclick = () => window.location.href = '/';

        useful.onclick = () => window.location.href = '#';

        account.onclick = () => window.location.href = '#';
    };
};

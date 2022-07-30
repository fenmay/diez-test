export class Footer {

    static getFooter() {
        const body = document.getElementsByTagName('body')[0];
        
        body.insertAdjacentHTML(
            'afterend',
            `<div class="footer">
                <div>Подпись в подвале сайта</div>
                <div>Связаться и что-то уточнить по заданию: https://t.me/Kenny_Nobody</div>
            </div>`
        );
    };
};

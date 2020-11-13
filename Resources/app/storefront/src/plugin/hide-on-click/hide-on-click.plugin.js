import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class HideOnClickPlugin extends Plugin {

    static options = {
        hideOnClickButtonSelector: '[data-hide-on-click-button]'
    };

    init() {
        this._hideButton = DomAccess.querySelector(this.el, this.options.hideOnClickButtonSelector);

        this._registerEvents();
    }

    _registerEvents() {
        this._hideButton.addEventListener('click', () => {
            this.el.style.display = 'none';
        });
    }
}

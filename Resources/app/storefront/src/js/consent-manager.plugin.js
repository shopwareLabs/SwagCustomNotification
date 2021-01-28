import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class ConsentManagerPlugin extends Plugin {

  static options = {
    selector_btn_consent: '.swag-custom-notification-consent-modal__consent-button',
    class_no_scroll: 'no-scroll',
    storage_key: 'sw-consent-manager-accepted',
    storage_lifetime_days: 90,
  };

  init() {
    this.initConsentModal();
  }


  initConsentModal() {
    const { storage_key, class_no_scroll, selector_btn_consent } = this.options;

    if (window.localStorage.getItem(storage_key)) {
        this.el.style.display = 'none';
    } else {
        this.el.style.display = 'block';
        DomAccess.querySelector(document, 'html').classList.add(class_no_scroll);
        this.buttonConsent = DomAccess.querySelector(this.el, selector_btn_consent);
        this.buttonConsent.addEventListener('click', this.handleClick.bind(this));
    }
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    this.saveConsent();
    this.init();
  }

  saveConsent() {
    const { storage_key, storage_lifetime_days, class_no_scroll } = this.options;

    window.localStorage.setItem(storage_key, '1', storage_lifetime_days);
    DomAccess.querySelector(document, 'html').classList.remove(class_no_scroll);
  }
}

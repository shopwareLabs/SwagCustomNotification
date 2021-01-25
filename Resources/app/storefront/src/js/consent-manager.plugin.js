import Plugin from 'src/plugin-system/plugin.class';
import CookieStorage from 'src/helper/storage/cookie-storage.helper';
import DomAccess from 'src/helper/dom-access.helper';

export default class ConsentManagerPlugin extends Plugin {

  static options = {
    selector_btn_consent: '.swag-custom-notification-consent-modal__consent-button',
    class_no_scroll: 'no-scroll',
    cookie_key: 'sw-consent-manager-accepted',
    cookie_lifetime_days: 90,
  };

  init() {
    this.initConsentModal();
  }


  initConsentModal() {
    const { class_no_scroll, selector_btn_consent } = this.options;

    DomAccess.querySelector(document, 'html').classList.add(class_no_scroll);
    this.buttonConsent = DomAccess.querySelector(this.el, selector_btn_consent);
    this.buttonConsent.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    this.saveConsent();
    this.reloadContent();
  }

  saveConsent() {
    const { cookie_key, cookie_lifetime_days, class_no_scroll } = this.options;

    CookieStorage.setItem(cookie_key, '1', cookie_lifetime_days);
    DomAccess.querySelector(document, 'html').classList.remove(class_no_scroll);
  }

  reloadContent() {
    this.buttonConsent.disabled = true;
    window.location.reload();
  }
}

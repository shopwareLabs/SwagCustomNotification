import Plugin from 'src/plugin-system/plugin.class';
import ModalHelper from './modal.helper';

const KEY_MODAL_CLOSED_ONCE = 'sw-info-modal-once';

export default class InfoModalPlugin extends Plugin {

  static options = {
    blurBackground: true
  }

  init() {
    if (this.closedOnce()) {
      return;
    }

    this.modalHelper = ModalHelper;
    this.initModal();
  }

  initModal() {
    const modalContent = this.el.innerHTML;

    this.modalHelper.open(this.options.blurBackground, modalContent, this.setClosedOnce);
  }

  closedOnce() {
    return sessionStorage.getItem(KEY_MODAL_CLOSED_ONCE);
  }

  setClosedOnce() {
    sessionStorage.setItem(KEY_MODAL_CLOSED_ONCE, 1);
  }
}

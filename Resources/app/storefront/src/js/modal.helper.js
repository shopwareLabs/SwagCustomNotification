import DomAccess from 'src/helper/dom-access.helper';

const SELECTOR_MODAL = '.js-pseudo-modal-template .modal';
const SELECTOR_MODAL_CONTENT = '.js-pseudo-modal-template-content-element';
const SELECTOR_MODAL_CLOSE = '.modal-close';
const CLASSES_MODAL_ACTIVE = ['show', 'sw-custom-notification__modal'];
const CLASSES_MODAL_BACKDROP = ['modal-backdrop', 'fade', 'show'];
const CLASS_NO_SCROLL = 'no-scroll';

class ModalSingleton {

  constructor() {
    this.init();
  }

  init() {
    this.getElements();
  }

  getElements() {
    this.modal = DomAccess.querySelector(document, SELECTOR_MODAL);
    this.modalContent = DomAccess.querySelector(this.modal, SELECTOR_MODAL_CONTENT);
    this.modalClose = DomAccess.querySelector(this.modal, SELECTOR_MODAL_CLOSE);
    this.modalBackdrop = this.createBackdrop();

    this.addEventListeners();
  }

  addEventListeners() {
    this.modalClose.addEventListener('click', this.close.bind(this));
  }

  createBackdrop() {
    const backdropEl = document.createElement('div');
    backdropEl.classList.add(...CLASSES_MODAL_BACKDROP);
    backdropEl.style.display = 'none';
    document.body.appendChild(backdropEl);

    return backdropEl;
  }

  open(backdrop = true, content, closeCallback) {
    DomAccess.querySelector(document, 'html').classList.add(CLASS_NO_SCROLL);
    this.modal.style.display = 'block';
    this.modal.classList.add(...CLASSES_MODAL_ACTIVE);

    if (backdrop) {
      this.modalBackdrop.style.display = 'block';
    }

    if (content) {
      this.modalContent.innerHTML = content;
    }

    if (closeCallback) {
      this.setCloseCallback(closeCallback);
    }
  }

  setCloseCallback(closeCallback) {
    this.modalClose.addEventListener('click', closeCallback, { once: true });
  }

  close() {
    DomAccess.querySelector(document, 'html').classList.remove(CLASS_NO_SCROLL);
    this.modal.style.display = 'none';
    this.modal.classList.remove(...CLASSES_MODAL_ACTIVE);
    this.modalContent.innerHTML = '';

    this.modalBackdrop.style.display = 'none';
  }

  setContent(content) {
    this.modalContent.innerHtml = content;
  }
}

const ModalHelper = Object.freeze(new ModalSingleton());

export default ModalHelper;

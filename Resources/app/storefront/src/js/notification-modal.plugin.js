import Plugin from 'src/plugin-system/plugin.class';
import PseudoModalUtil from 'src/utility/modal-extension/pseudo-modal.util';

const KEY_MODAL_CLOSED_ONCE = 'sw-notification-modal-';
const PRIVACY_CHECKBOX_ID_LEGACY = 'form-pvivacy-opt-in-';
const PRIVACY_CHECKBOX_ID = 'form-privacy-opt-in-';

export default class NotificationModalPlugin extends Plugin {
    static options = {
        blurBackground: true
    }

    init() {
        if (this.wasClosedOnce()) {
            return;
        }

        let content = this.el.innerHTML;
        // Replace privacy checkbox ids, so input ids are unique
        content = content.replace(new RegExp(PRIVACY_CHECKBOX_ID, 'g'), PRIVACY_CHECKBOX_ID + Math.random());
        content = content.replace(new RegExp(PRIVACY_CHECKBOX_ID_LEGACY, 'g'), PRIVACY_CHECKBOX_ID_LEGACY + Math.random());

        this._modal = new PseudoModalUtil(content, this.options.blurBackground);
        this._modal.open(() => window.PluginManager.initializePlugins());

        const modalElement = this._modal.getModal();
        $(modalElement).on('hidden.bs.modal', () => { this.setClosedOnce() });
    }

    wasClosedOnce() {
        return sessionStorage.getItem(this.sessionKey());
    }

    setClosedOnce() {
        sessionStorage.setItem(this.sessionKey(), 1);
    }

    sessionKey() {
        return KEY_MODAL_CLOSED_ONCE + this.el.id;
    }
}

import Plugin from 'src/plugin-system/plugin.class';

export default class ModalOnLoadPlugin extends Plugin {

    init() {
        const _modal = this.el;
        $(_modal).modal('show');
    }
}

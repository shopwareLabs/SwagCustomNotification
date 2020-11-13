import ConsentManagerPlugin from './js/consent-manager.plugin';
import InfoModalPlugin from './js/info-modal.plugin';
import HideOnClickPlugin from './js/hide-on-click.plugin';
import ModalOnLoadPlugin from './js/modal-on-load.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('ConsentManagerPlugin', ConsentManagerPlugin, '[data-consent-manager-plugin]');
PluginManager.register('HideOnClickPlugin', HideOnClickPlugin, '[data-hide-on-click-container]');
PluginManager.register('InfoModalPlugin', InfoModalPlugin, '[data-info-modal-plugin]');
PluginManager.register('ModalOnLoadPlugin', ModalOnLoadPlugin, '[data-open-modal-on-load]');

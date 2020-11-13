import ConsentManagerPlugin from './js/consent-manager.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('ConsentManagerPlugin', ConsentManagerPlugin, '[data-consent-manager-plugin]');

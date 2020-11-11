import ConsentManagerPlugin from './js/consent-manager.plugin';
import HideOnClickPlugin from './plugin/hide-on-click/hide-on-click.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('ConsentManagerPlugin', ConsentManagerPlugin, '[data-consent-manager-plugin]');
PluginManager.register('HideOnClickPlugin', HideOnClickPlugin, '[data-hide-on-click-container]');

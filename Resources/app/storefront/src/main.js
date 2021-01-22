import ConsentManagerPlugin from './js/consent-manager.plugin';
import HideOnClickPlugin from './js/hide-on-click.plugin';
import NotificationModalPlugin from './js/notification-modal.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('ConsentManagerPlugin', ConsentManagerPlugin, '[data-consent-manager-plugin]');
PluginManager.register('HideOnClickPlugin', HideOnClickPlugin, '[data-hide-on-click-container]');
PluginManager.register('NotificationModalPlugin', NotificationModalPlugin, '[data-notification-modal]');

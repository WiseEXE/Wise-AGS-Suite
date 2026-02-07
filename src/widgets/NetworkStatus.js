// Network status widget for WiFi, Ethernet, and Bluetooth
const network = await Service.import('network');
const bluetooth = await Service.import('bluetooth');

const WifiIndicator = () => Widget.Icon({
    class_name: 'wifi',
}).hook(network, self => {
    const icon = network.wifi?.internet || 'disconnected';
    const strength = network.wifi?.strength || 0;
    self.icon = `network-wireless-signal-${icon === 'connected' ? 'good' : 'none'}-symbolic`;
    self.tooltip_text = network.wifi?.ssid || 'No WiFi';
});

const WiredIndicator = () => Widget.Icon({
    class_name: 'wired',
    icon: network.wired.bind('internet').as(internet =>
        `network-wired-${internet === 'connected' ? '' : 'dis'}connected-symbolic`
    ),
    tooltip_text: network.wired.bind('internet').as(internet =>
        `Ethernet: ${internet}`
    ),
});

const BluetoothIndicator = () => Widget.Icon({
    class_name: 'bluetooth',
}).hook(bluetooth, self => {
    if (!bluetooth.enabled) {
        self.icon = 'bluetooth-disabled-symbolic';
        self.tooltip_text = 'Bluetooth: Disabled';
    } else {
        self.icon = bluetooth.connected_devices.length > 0
            ? 'bluetooth-active-symbolic'
            : 'bluetooth-symbolic';
        self.tooltip_text = `Bluetooth: ${bluetooth.connected_devices.length} device(s)`;
    }
});

export const NetworkStatus = () => Widget.Box({
    class_name: 'network-status',
    children: [
        WifiIndicator(),
        WiredIndicator(),
        BluetoothIndicator(),
    ],
});

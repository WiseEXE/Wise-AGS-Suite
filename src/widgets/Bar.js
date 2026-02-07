// Status bar combining all widgets
import { Workspaces } from './Workspaces.js';
import { Volume } from './Volume.js';
import { Clock } from './Clock.js';
import { SystemResources } from './SystemResources.js';
import { NetworkStatus } from './NetworkStatus.js';
import { ColorSwitcher } from './ColorSwitcher.js';

// Left section
const Left = () => Widget.Box({
    spacing: 8,
    children: [
        Workspaces(),
    ],
});

// Center section
const Center = () => Widget.Box({
    spacing: 8,
    children: [
        Clock(),
    ],
});

// Right section
const Right = () => Widget.Box({
    hpack: 'end',
    spacing: 8,
    children: [
        SystemResources(),
        NetworkStatus(),
        Volume(),
        ColorSwitcher(),
    ],
});

export const Bar = (monitor = 0) => Widget.Window({
    name: `bar-${monitor}`,
    class_name: 'bar',
    monitor,
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        start_widget: Left(),
        center_widget: Center(),
        end_widget: Right(),
    }),
});

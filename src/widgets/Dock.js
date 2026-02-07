// App Dock with 5 app shortcuts and app menu launcher
const applications = await Service.import('applications');

// Define 5 favorite apps
const favoriteApps = [
    'firefox',
    'kitty',
    'thunar',
    'code',
    'spotify',
];

const AppButton = (appName) => {
    const app = applications.query(appName)?.[0];
    
    if (!app) return null;
    
    return Widget.Button({
        class_name: 'app-button',
        child: Widget.Icon({
            icon: app.icon_name || 'application-x-executable',
            size: 48,
        }),
        on_primary_click: () => {
            app.launch();
        },
        tooltip_text: app.name,
    });
};

const AppMenuLauncher = () => Widget.Button({
    class_name: 'app-menu-launcher',
    child: Widget.Icon({
        icon: 'view-app-grid-symbolic',
        size: 48,
    }),
    on_primary_click: () => {
        const appMenu = App.getWindow('app-menu');
        if (appMenu) {
            appMenu.visible = !appMenu.visible;
        }
    },
    tooltip_text: 'Open App Menu',
});

export const Dock = (monitor = 0) => Widget.Window({
    name: `dock-${monitor}`,
    class_name: 'dock',
    monitor,
    anchor: ['bottom', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        center_widget: Widget.Box({
            class_name: 'dock-box',
            spacing: 8,
            children: [
                ...favoriteApps.map(app => AppButton(app)).filter(b => b !== null),
                Widget.Separator({ vertical: true }),
                AppMenuLauncher(),
            ],
        }),
    }),
});

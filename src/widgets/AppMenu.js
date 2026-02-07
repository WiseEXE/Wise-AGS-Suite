// App Menu - Shows all available applications
const applications = await Service.import('applications');

const AppItem = (app) => Widget.Button({
    class_name: 'app-item',
    on_primary_click: () => {
        app.launch();
        App.closeWindow('app-menu');
    },
    child: Widget.Box({
        children: [
            Widget.Icon({
                icon: app.icon_name || 'application-x-executable',
                size: 32,
            }),
            Widget.Label({
                class_name: 'app-name',
                label: app.name,
                xalign: 0,
                vpack: 'center',
                truncate: 'end',
            }),
        ],
    }),
    tooltip_text: app.description || app.name,
});

export const AppMenu = () => {
    const appList = Widget.Box({
        vertical: true,
        children: applications.query('').map(app => AppItem(app)),
    });

    const searchEntry = Widget.Entry({
        class_name: 'app-search',
        placeholder_text: 'Search applications...',
        on_change: ({ text }) => {
            // Filter apps based on search text
            const filtered = applications.query(text || '');
            appList.children = filtered.map(app => AppItem(app));
        },
    });

    return Widget.Window({
        name: 'app-menu',
        anchor: ['top', 'bottom', 'left', 'right'],
        visible: false,
        keymode: 'on-demand',
        child: Widget.Box({
            class_name: 'app-menu',
            vertical: true,
            children: [
                searchEntry,
                Widget.Scrollable({
                    hscroll: 'never',
                    css: 'min-width: 400px; min-height: 500px;',
                    child: appList,
                }),
            ],
        }),
        setup: self => self.keybind('Escape', () => {
            App.closeWindow('app-menu');
        }),
    });
};

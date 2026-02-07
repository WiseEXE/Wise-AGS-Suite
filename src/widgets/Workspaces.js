// Workspace switcher for Hyprland
const hyprland = await Service.import('hyprland');

export const Workspaces = () => Widget.Box({
    class_name: 'workspaces',
    children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
        attribute: i,
        label: `${i}`,
        onClicked: () => hyprland.messageAsync(`dispatch workspace ${i}`),
        class_name: hyprland.active.workspace.bind('id')
            .as(id => `${id === i ? 'focused' : ''}`),
    })),
});

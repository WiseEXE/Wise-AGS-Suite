// Color switcher widget for theme switching
const colorSchemes = [
    { name: 'Blue', color: '#3584e4' },
    { name: 'Green', color: '#33d17a' },
    { name: 'Purple', color: '#9141ac' },
    { name: 'Orange', color: '#ff7800' },
    { name: 'Red', color: '#e01b24' },
];

let currentScheme = 0;

export const ColorSwitcher = () => Widget.Button({
    class_name: 'color-switcher',
    child: Widget.Icon({
        icon: 'preferences-color-symbolic',
    }),
    on_primary_click: () => {
        currentScheme = (currentScheme + 1) % colorSchemes.length;
        const scheme = colorSchemes[currentScheme];
        
        // Apply color scheme to CSS variables
        App.applyCss(`
            window {
                --accent-color: ${scheme.color};
            }
        `);
    },
    tooltip_text: 'Switch Color Scheme',
});

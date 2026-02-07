// Custom Theme Example
// This file shows how to create a custom color scheme

// Color Schemes
export const themes = {
    catppuccin: {
        name: 'Catppuccin',
        accent: '#89b4fa',
        bg: 'rgba(30, 30, 46, 0.9)',
        fg: '#cdd6f4',
        border: 'rgba(137, 180, 250, 0.3)',
    },
    nord: {
        name: 'Nord',
        accent: '#88c0d0',
        bg: 'rgba(46, 52, 64, 0.9)',
        fg: '#eceff4',
        border: 'rgba(136, 192, 208, 0.3)',
    },
    dracula: {
        name: 'Dracula',
        accent: '#bd93f9',
        bg: 'rgba(40, 42, 54, 0.9)',
        fg: '#f8f8f2',
        border: 'rgba(189, 147, 249, 0.3)',
    },
    gruvbox: {
        name: 'Gruvbox',
        accent: '#d79921',
        bg: 'rgba(40, 40, 40, 0.9)',
        fg: '#ebdbb2',
        border: 'rgba(215, 153, 33, 0.3)',
    },
    tokyo_night: {
        name: 'Tokyo Night',
        accent: '#7aa2f7',
        bg: 'rgba(26, 27, 38, 0.9)',
        fg: '#c0caf5',
        border: 'rgba(122, 162, 247, 0.3)',
    },
};

// Apply a theme
export function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    App.applyCss(`
        window {
            --accent-color: ${theme.accent};
            --bg-color: ${theme.bg};
            --fg-color: ${theme.fg};
            --border-color: ${theme.border};
        }
    `);
}

// Usage in ColorSwitcher.js:
// import { themes, applyTheme } from '../themes.js';
// const themeNames = Object.keys(themes);
// applyTheme(themeNames[currentScheme]);

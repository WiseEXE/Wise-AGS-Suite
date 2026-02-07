# Wise-AGS-Suite

A full Wayland/Hyprland UI suite built with [AGS (Aylur's GTK Shell)](https://github.com/Aylur/ags).

I've always been a fan of the r/UnixPorn sub-Reddit, and it was what initially sparked my interest in fully swapping to Linux. I've always been a DIY type of person, so I thought why not just build it from the ground up? It is my first major project, especially considering I am learning JS/TS as I grow so progress will be slow.

## Features

### Status Bar
- **Workspace Switcher**: Display and switch between Hyprland workspaces (1-10)
- **Volume Mixer**: Adjust system volume with visual slider and icon
- **Clock**: Shows date and time with calendar popup on hover
- **System Resources**: Real-time CPU and RAM usage monitors
- **Network Status**: Display WiFi, Ethernet, and Bluetooth status
- **Color Switcher**: Quickly switch between color schemes

### App Dock
- **Favorite Apps**: Quick access to 5 customizable applications
- **App Menu Launcher**: Button to open full application menu
- **App Menu**: Searchable application launcher

## Prerequisites

- [AGS](https://github.com/Aylur/ags) - Aylur's GTK Shell
- Hyprland (for workspace switching)
- Node.js and npm (for development)

## Installation

1. Install AGS following the [official installation guide](https://aylur.github.io/ags-docs/config/installation/)

2. Clone this repository:
```bash
git clone https://github.com/WiseEXE/Wise-AGS-Suite.git
cd Wise-AGS-Suite
```

3. Install dependencies (optional, for TypeScript development):
```bash
npm install
```

## Usage

### Running the suite

```bash
ags -c config.js
```

### Auto-start with Hyprland

Add to your `~/.config/hypr/hyprland.conf`:
```
exec-once = ags -c /path/to/Wise-AGS-Suite/config.js
```

## Customization

### Favorite Apps

Edit `src/widgets/Dock.js` and modify the `favoriteApps` array:
```javascript
const favoriteApps = [
    'firefox',
    'kitty',
    'thunar',
    'code',
    'spotify',
];
```

### Color Schemes

Edit `src/widgets/ColorSwitcher.js` to add or modify color schemes:
```javascript
const colorSchemes = [
    { name: 'Blue', color: '#3584e4' },
    { name: 'Green', color: '#33d17a' },
    // Add more schemes...
];
```

### Styling

Modify `style.css` to customize the appearance of all widgets.

## Project Structure

```
Wise-AGS-Suite/
├── config.js              # Main AGS configuration
├── style.css              # Global styles
├── src/
│   └── widgets/
│       ├── Bar.js         # Status bar container
│       ├── Workspaces.js  # Workspace switcher
│       ├── Volume.js      # Volume mixer
│       ├── Clock.js       # Clock with calendar
│       ├── SystemResources.js  # CPU/RAM monitors
│       ├── NetworkStatus.js    # Network indicators
│       ├── ColorSwitcher.js    # Theme switcher
│       ├── Dock.js        # App dock
│       └── AppMenu.js     # Application launcher
├── package.json
└── tsconfig.json
```

## Development

Build TypeScript files (if using TypeScript):
```bash
npm run build
```

Watch for changes:
```bash
npm run watch
```

## License

MIT

## Acknowledgments

- [Aylur](https://github.com/Aylur) for creating AGS
- The r/UnixPorn community for inspiration

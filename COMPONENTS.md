# Wise-AGS-Suite Component Overview

## Status Bar (Top)

The status bar is anchored to the top of the screen and contains three sections:

### Left Section
- **Workspace Switcher**: Buttons labeled 1-10 for each Hyprland workspace
  - Current workspace is highlighted with accent color
  - Click to switch workspaces
  - Hover effects for better UX

### Center Section
- **Clock**: Displays current time and date (HH:MM:SS Mon Day, Year)
  - Hover to show calendar popup
  - Calendar popup appears below the clock
  - Click to toggle calendar visibility

### Right Section
- **System Resources**: 
  - CPU usage (circular progress with CPU icon)
  - RAM usage (circular progress with HDD icon)
  - Updates every 2 seconds
  - Hover shows percentage tooltip
  
- **Network Status**:
  - WiFi indicator (shows signal strength and SSID)
  - Ethernet indicator (connected/disconnected)
  - Bluetooth indicator (shows number of connected devices)
  
- **Volume Mixer**:
  - Volume icon (changes based on volume level)
  - Slider to adjust volume
  - Tooltip shows current volume percentage
  
- **Color Switcher**:
  - Button with color icon
  - Click to cycle through 5 color schemes:
    - Blue (#3584e4)
    - Green (#33d17a)
    - Purple (#9141ac)
    - Orange (#ff7800)
    - Red (#e01b24)

## App Dock (Bottom)

The dock is anchored to the bottom of the screen:

### Features
- **5 Favorite Apps**: Quick launch buttons for:
  1. Firefox (web browser)
  2. Kitty (terminal)
  3. Thunar (file manager)
  4. VS Code (code editor)
  5. Spotify (music player)
  
- **App Menu Launcher**: Grid icon button
  - Opens full application menu
  - Shows all installed applications
  - Searchable interface

### App Menu (Overlay)
- **Search Bar**: Type to filter applications
- **Scrollable List**: All available applications with icons
- **Click to Launch**: Click any app to launch it
- **ESC to Close**: Press Escape to dismiss menu

## Customization

### Change Favorite Apps
Edit `src/widgets/Dock.js`:
```javascript
const favoriteApps = [
    'your-app-1',
    'your-app-2',
    'your-app-3',
    'your-app-4',
    'your-app-5',
];
```

### Adjust Polling Intervals
- **CPU/RAM**: Edit `src/widgets/SystemResources.js` (default: 2000ms)
- **Clock**: Edit `src/widgets/Clock.js` (default: 1000ms)

### Modify Color Schemes
Edit `src/widgets/ColorSwitcher.js` to add or change colors.

### Style Customization
Edit `style.css` to change:
- Colors and transparency
- Spacing and padding
- Border radius and effects
- Font family and sizes

## Technical Details

### Dependencies
- AGS (Aylur's GTK Shell)
- Hyprland (for workspace management)
- System utilities: `top`, `free`, `date`

### Services Used
- `hyprland`: Workspace management
- `audio`: Volume control
- `network`: WiFi and Ethernet status
- `bluetooth`: Bluetooth device management
- `applications`: Application launcher

### Widget Types
- `Widget.Window`: Top-level containers
- `Widget.Box`: Layout containers
- `Widget.Button`: Interactive buttons
- `Widget.Icon`: Icons
- `Widget.Label`: Text display
- `Widget.Slider`: Volume slider
- `Widget.CircularProgress`: CPU/RAM indicators
- `Widget.Calendar`: Calendar popup
- `Widget.Scrollable`: Scrollable app list
- `Widget.Entry`: Search input

## File Structure

```
config.js           - Main entry point, loads all windows
style.css          - Global styling

src/widgets/
├── Bar.js             - Status bar container (combines all status widgets)
├── Workspaces.js      - Hyprland workspace switcher
├── Volume.js          - Audio volume control
├── Clock.js           - Clock and calendar
├── SystemResources.js - CPU and RAM monitors
├── NetworkStatus.js   - Network and Bluetooth indicators
├── ColorSwitcher.js   - Theme color switcher
├── Dock.js            - App dock with favorites
└── AppMenu.js         - Full application launcher
```

## Usage Tips

1. **First Run**: Make sure AGS is installed and configured
2. **Test Components**: Run `ags -c config.js` to test
3. **Auto-start**: Add to Hyprland config for automatic startup
4. **Reload Config**: Use `ags -q; ags -c config.js` to reload changes
5. **Debug**: Check AGS logs with `ags -i` for interactive mode

## Known Limitations

- Requires Hyprland for workspace switching (can be adapted for other WMs)
- CPU monitoring uses `top` command (may vary by system)
- RAM monitoring uses `free` command (Linux-specific)
- Application icons depend on system icon themes
- Some applications may not have proper icon names

## Future Enhancements

Potential additions:
- Battery indicator for laptops
- Media player controls
- System tray integration
- Notification center
- Power menu
- Quick settings panel
- Weather widget
- Brightness control

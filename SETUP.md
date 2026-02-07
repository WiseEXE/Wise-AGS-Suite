# Quick Setup Guide

This guide will help you get Wise-AGS-Suite up and running quickly.

## Prerequisites Check

Before starting, ensure you have:

1. **Hyprland**: A dynamic tiling Wayland compositor
   ```bash
   hyprctl version
   ```

2. **AGS**: Aylur's GTK Shell
   ```bash
   ags --version
   ```

3. **Node.js** (optional, for development):
   ```bash
   node --version
   ```

## Installation Steps

### 1. Install AGS

If you don't have AGS installed, follow the [official guide](https://aylur.github.io/ags-docs/config/installation/).

For Arch Linux:
```bash
yay -S ags
```

For NixOS, add to your configuration:
```nix
programs.ags.enable = true;
```

### 2. Clone the Repository

```bash
cd ~/.config
git clone https://github.com/WiseEXE/Wise-AGS-Suite.git
cd Wise-AGS-Suite
```

### 3. Test the Configuration

```bash
ags -c config.js
```

You should see:
- A status bar at the top with workspaces, clock, system info, etc.
- An app dock at the bottom with your favorite apps

### 4. Configure Auto-Start

Add to your Hyprland config (`~/.config/hypr/hyprland.conf`):

```conf
exec-once = ags -c ~/.config/Wise-AGS-Suite/config.js
```

### 5. Customize Your Setup

#### Change Favorite Apps

Edit `src/widgets/Dock.js` and replace the app names:

```javascript
const favoriteApps = [
    'firefox',      // Your web browser
    'kitty',        // Your terminal
    'thunar',       // Your file manager
    'code',         // Your editor
    'spotify',      // Your music player
];
```

To find application names:
```bash
ls /usr/share/applications/*.desktop | xargs -I {} basename {} .desktop
```

#### Adjust Styling

Edit `style.css` to change colors, sizes, spacing, etc.

Key CSS variables:
```css
--accent-color: #3584e4;     /* Main theme color */
--bg-color: rgba(30, 30, 46, 0.9);  /* Background */
--fg-color: #cdd6f4;         /* Text color */
```

## Troubleshooting

### Status Bar Not Showing

1. Check if AGS is running:
   ```bash
   ps aux | grep ags
   ```

2. Check for errors:
   ```bash
   ags -c config.js
   ```

### Workspaces Not Switching

Make sure you're running Hyprland:
```bash
echo $XDG_CURRENT_DESKTOP
```
Should output: `Hyprland`

### Icons Not Appearing

Install an icon theme:
```bash
# Arch Linux
yay -S papirus-icon-theme

# Ubuntu/Debian
sudo apt install papirus-icon-theme
```

### Apps Not Launching

Check if the application is installed:
```bash
which firefox  # Replace with your app name
```

If not installed, install it through your package manager.

## Reloading Configuration

After making changes, reload AGS:

```bash
ags -q; ags -c ~/.config/Wise-AGS-Suite/config.js
```

Or create a keybinding in Hyprland config:
```conf
bind = SUPER, R, exec, ags -q; ags -c ~/.config/Wise-AGS-Suite/config.js
```

## Testing Individual Components

You can test widgets individually:

```bash
# Test status bar only
ags -c <(echo "App.config({ windows: [Bar(0)] }); import { Bar } from './src/widgets/Bar.js';")
```

## Next Steps

1. Read [COMPONENTS.md](COMPONENTS.md) for detailed component documentation
2. Explore the [AGS documentation](https://aylur.github.io/ags-docs/)
3. Join the AGS community for help and inspiration
4. Share your customizations on r/unixporn!

## Getting Help

- Check AGS logs: `journalctl -f | grep ags`
- AGS Wiki: https://aylur.github.io/ags-docs/
- GitHub Issues: https://github.com/WiseEXE/Wise-AGS-Suite/issues
- Hyprland Wiki: https://wiki.hyprland.org/

## Performance Tips

1. **Reduce Polling Frequency**: If you experience lag, increase polling intervals in SystemResources.js and Clock.js

2. **Disable Animations**: Modify CSS to remove `transition` properties

3. **Optimize App Menu**: Limit the number of apps shown initially

4. **Use Static Icons**: Pre-load icons instead of dynamic lookups

Enjoy your new UI!

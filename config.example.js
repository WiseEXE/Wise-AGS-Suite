// Example Configuration File
// Copy this to config.js and customize as needed

// Import all widgets
import { Bar } from './src/widgets/Bar.js';
import { Dock } from './src/widgets/Dock.js';
import { AppMenu } from './src/widgets/AppMenu.js';
import { CalendarPopup } from './src/widgets/Clock.js';

// Configuration options
const config = {
    // CSS styling file path
    style: './style.css',
    
    // Windows to display
    windows: [
        // Status bar at the top (monitor 0)
        Bar(0),
        
        // App dock at the bottom (monitor 0)
        Dock(0),
        
        // Application launcher menu (overlay)
        AppMenu(),
        
        // Calendar popup (appears on clock hover)
        CalendarPopup(),
    ],
};

// Apply configuration
App.config(config);

// Optional: Add keybindings or custom behavior
// Example: Toggle app menu with a custom action
// Utils.exec('hyprctl dispatch bind SUPER, A, exec, ags -c config.js');

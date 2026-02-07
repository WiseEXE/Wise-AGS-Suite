// Main AGS configuration file
import { Bar } from './src/widgets/Bar.js';
import { Dock } from './src/widgets/Dock.js';
import { AppMenu } from './src/widgets/AppMenu.js';
import { CalendarPopup } from './src/widgets/Clock.js';

App.config({
    style: './style.css',
    windows: [
        Bar(0),
        Dock(0),
        AppMenu(),
        CalendarPopup(),
    ],
});

# Wise-AGS-Suite UI Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│                            STATUS BAR (TOP)                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  [1][2][3][4][5][6][7][8][9][10]    12:34:56 Feb 7, 2026    ●● 🌐 🔊 🎨 │
│   └─ Workspaces                      └─ Clock/Calendar      │ │  │  │  │ │
│                                                              │ │  │  │  │ │
│                                              CPU/RAM ────────┘ │  │  │  │ │
│                                              Network ──────────┘  │  │  │ │
│                                              Volume ──────────────┘  │  │ │
│                                              Colors ─────────────────┘  │ │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘

                                DESKTOP AREA
                         (Hyprland workspaces shown here)
                              Calendar pops up here
                                      ↓
                            ┌──────────────────┐
                            │   February 2026   │
                            ├──────────────────┤
                            │ Su Mo Tu We Th Fr│
                            │  1  2  3  4  5  6│
                            │  7  8  9 10 11 12│
                            │    ...           │
                            └──────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                           APP DOCK (BOTTOM)                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│              [🦊] [💻] [📁] [📝] [🎵] │ [⊞]                              │
│               │    │    │    │    │    │                                 │
│            Firefox │    │    │    │    └─ App Menu Launcher              │
│                Kitty    │    │    │                                      │
│                    Thunar   │    │                                       │
│                        VS Code   │                                       │
│                             Spotify                                      │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘


APP MENU (Overlay - appears when clicking [⊞]):
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                                                                           │
│            ┌──────────────────────────────────────────┐                  │
│            │  🔍 Search applications...               │                  │
│            ├──────────────────────────────────────────┤                  │
│            │  🦊 Firefox - Web browser                │                  │
│            │  💻 Kitty - Terminal emulator            │                  │
│            │  📁 Thunar - File manager                │                  │
│            │  📝 Visual Studio Code - Code editor     │                  │
│            │  🎵 Spotify - Music player               │                  │
│            │  📧 Thunderbird - Email client           │                  │
│            │  🎨 GIMP - Image editor                  │                  │
│            │  📊 LibreOffice - Office suite           │                  │
│            │  ... (scrollable)                        │                  │
│            └──────────────────────────────────────────┘                  │
│                                                                           │
│            (Click app to launch, ESC to close)                           │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘


WIDGET DETAILS:

Status Bar (Top):
├── Left Section
│   └── Workspace Switcher (buttons 1-10, current highlighted)
│
├── Center Section
│   └── Clock (HH:MM:SS Mon Day, Year)
│       └── Hover: Shows calendar popup
│
└── Right Section
    ├── System Resources
    │   ├── CPU: Circular progress with percentage
    │   └── RAM: Circular progress with percentage
    │
    ├── Network Status
    │   ├── WiFi: Signal strength & SSID
    │   ├── Ethernet: Connected/disconnected
    │   └── Bluetooth: Device count
    │
    ├── Volume Mixer
    │   ├── Icon: Changes based on volume level
    │   └── Slider: Adjust volume 0-100%
    │
    └── Color Switcher
        └── Button: Cycles through 5 color themes

App Dock (Bottom):
├── Favorite Apps (5 customizable)
│   ├── Firefox (web browser)
│   ├── Kitty (terminal)
│   ├── Thunar (file manager)
│   ├── VS Code (editor)
│   └── Spotify (music)
│
└── App Menu Launcher
    └── Opens searchable application grid

INTERACTIONS:

1. Workspace Switcher: Click number to switch workspace
2. Clock: Hover to show calendar, click to toggle
3. System Resources: Hover to see exact percentages
4. Network: Hover to see connection details
5. Volume: Drag slider to adjust, icon shows level
6. Color Switcher: Click to cycle through themes
7. App Icons: Click to launch application
8. App Menu: Click grid icon, search & launch apps
9. Calendar: Auto-hides when mouse leaves
10. App Search: Type to filter applications instantly

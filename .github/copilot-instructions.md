# Astal Shell Configuration

This is an **Astal** (next-generation AGS) desktop shell configuration using TypeScript and React JSX to create GTK3 desktop widgets for Linux window managers.

## Architecture Overview

- **Entry point**: `app.ts` - Initializes the Astal app, loads global styles, and creates Bar widgets for each monitor
- **Widget structure**: `widget/` directory contains reusable desktop components written as React TSX functions
- **Styling**: `style.scss` - SCSS with GTK theme integration using `@theme_fg_color` and `@theme_bg_color`
- **Framework**: Astal provides React-like JSX components that render to native GTK3 widgets

## Key Patterns

### Widget Components
Widgets are React functional components that return JSX elements representing GTK widgets:
```tsx
// widget/Bar.tsx - Example pattern
export default function Bar(gdkmonitor: Gdk.Monitor) {
    return <window
        className="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}>
        <centerbox>
            <button onClicked="echo hello">Content</button>
        </centerbox>
    </window>
}
```

### Variable System
Use `Variable` from `astal` for reactive state with polling:
```tsx
const time = Variable("").poll(1000, "date")  // Updates every second
<label label={time()} />  // Reactive binding
```

### Event Handlers
- String commands: `onClicked="echo hello"` (executes shell command)
- Function callbacks: `onClicked={() => print("hello")}` (JavaScript function)

### Widget Anchoring
Windows use `Astal.WindowAnchor` bitflags (TOP, LEFT, RIGHT, BOTTOM) for positioning and `Astal.Exclusivity.EXCLUSIVE` for window manager integration.

## TypeScript Configuration

- **JSX**: Uses `react-jsx` with `jsxImportSource: "astal/gtk3"`
- **Module system**: ES2022 with bundler resolution
- **Type definitions**: `env.d.ts` declares module types for asset imports (SCSS, CSS, BLP files)

## Styling Approach

- **SCSS integration**: Import styles directly as strings (`import style from "./style.scss"`)
- **GTK theming**: Use `${"@theme_fg_color"}` syntax to access system theme colors
- **CSS classes**: Target widgets with `.Bar`, `.button`, etc., following GTK CSS selectors

## File Organization

- **`app.ts`**: Application entry point and monitor setup
- **`widget/`**: Individual desktop components (bars, panels, overlays)
- **`style.scss`**: Global styles with GTK theme integration
- **`secrets.js`**: API keys and sensitive configuration (gitignored)
- **`tsconfig.json`**: TypeScript config optimized for Astal JSX

## Development Notes

- This uses **Astal**, not the original AGS - syntax and patterns differ from AGS v1
- Widgets are functions that return JSX, not class-based components
- The `astal/gtk3` import provides both GTK widgets and Astal utilities
- Monitor-aware widgets receive `Gdk.Monitor` parameter for multi-display setups
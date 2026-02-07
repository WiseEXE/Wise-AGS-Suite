import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable, GLib } from "astal"
import Clock from "./clock/clock.tsx"
import Workspaces from "./workspaces.tsx"
import ClientTitle from "./activeWIndow.tsx"
import MediaPlayer from "./media-player.tsx"
import Dashboard from "./dashboard/dashboard.tsx"
import BGSwitcher from "./bg-switcher/bg-switcher.tsx"
import Settings from "./settings/settings.tsx"
import SystemTray from "./system-tray.tsx"

export default function Bar(gdkmonitor: Gdk.Monitor) {
    const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

    return <window
        className="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}
        application={App}>
        <centerbox>
            <box>
                {Workspaces(gdkmonitor)}
                {/* <BG-Switcher /> */}
                <MediaPlayer />
            </box>
            <ClientTitle />
            
            <box halign={Gtk.Align.END}>
                <Clock />
                {/* <Dashboard /> */}
                {/* <Settings /> */}
                <SystemTray />
            </box>
        </centerbox>
    </window>
}

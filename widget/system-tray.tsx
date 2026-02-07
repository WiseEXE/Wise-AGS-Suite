import {bind} from "astal"
import Tray from "gi://AstalTray"
import {App, Astal, Gtk, Gdk} from "astal/gtk3"

export default function SystemTray() {
    const tray = Tray.get_default()
    
    return <box className="system-tray">
        {bind(tray, "items").as(items => items.map(item => (
            <button
                tooltipMarkup={bind(item, "tooltipMarkup")}
                onClicked={e => item.activate(0,0)}>
                <icon gicon={bind(item, "gicon")} />
            </button>
        )))}
    </box>
}
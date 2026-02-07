import {bind} from "astal"
import Hyprland from "gi://AstalHyprland"

export default function ClientTitle() {
    const hyprland = Hyprland.get_default()
    return <box className="clientTitle">
        <label
            label={bind(hyprland, "focusedClient").as(client => client ? client.title : "")}
        />
    </box>
}
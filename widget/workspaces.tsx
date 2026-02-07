import {App, Astal, Gtk, Gdk} from "astal/gtk3"
import {Variable, GLib, bind} from "astal"
import Hyprland from "gi://AstalHyprland"

export default function Workspaces(gdkmonitor: Gdk.Monitor) {
    const hyprland = Hyprland.get_default()
    const display = Gdk.Display.get_default()
    
    // Find monitor number
    let monitorNum = 0;
    if(display){
        for(let i = 0; i < display.get_n_monitors(); i++){
            if(display.get_monitor(i) === gdkmonitor){
                monitorNum = i;
                break;
            }
        }
    }

    return <box className="workspaces">{
        bind(hyprland, "workspaces").as(workspace => workspace
            // Fiilter workspaces for this monitor and exclude special workspaces
            .filter(workspace => workspace.monitor?.id === monitorNum && workspace.id >= 0)
            // sort by monitor ID
            .sort((x, y) => x.id - y.id)
            // Map to buttons
            .map(workspace => (
                <button
                // Highlight active workspace
                className={bind(hyprland, "activeWorkspace").as(activeWorkspace => activeWorkspace == workspace ? "active" : "")}
                    onClicked={() => workspace.focus()}
                >
                    {workspace.id}
                </button>
            ))
        )
    }
    </box>
}

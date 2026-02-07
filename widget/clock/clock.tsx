import { Gdk } from 'astal/gtk3';
import { Variable, GLib, bind } from "astal";
import { App, Astal, Gtk, Gdk } from "astal/gtk3";

const time = Variable("").poll(1000, () => GLib.DateTime.new_now_local().format("%l:%M %p"))!;

export default function Clock () {
    return <box
        name="clock"
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.TOP}
        exclusivity={Astal.Exclusivity.NORMAL}
        application={App}>

        <box className="clockbox">
            <label
                className="label-clock"
                label = {bind(time)}
            />
        </box>
    </box>
}
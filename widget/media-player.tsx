import {Gtk} from "astal/gtk3"
import {bind} from "astal"
import Mpris from "gi://AstalMpris"

export default function MediaPlayer() {
    const mpris = Mpris.get_default()

    return <box className="media-player">
        {bind(mpris, "players").as(players => {
            if (players.length === 0) {
                return null;
            } else{
                const player = players[0]
                return <box>
                    <label label = {bind(player, "title")} />
                    <button
                        className="previous-button"
                        onClicked={() => player.previous()}>
                        <icon icon="media-skip-backward-symbolic" />
                    </button>
                    <button
                        className="playback-button"
                        onClicked={() => player.play_pause()}>
                        <icon icon={bind(player, "playbackStatus").as(status => status == Mpris.PlaybackStatus.PLAYING ? "media-playback-pause-symbolic" : "media-playback-start-symbolic")} />
                    </button>
                    <button
                        className="next-button"
                        onClicked={() => player.next()}>
                        <icon icon="media-skip-forward-symbolic" />
                    </button>
                </box>
            }
        })}
    </box>
}
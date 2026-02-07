import { App } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar"
import Clock from "./widget/clock/clock.tsx"



App.start({
    css: style,
    main() {
        App.get_monitors().map(Bar)
    },
})

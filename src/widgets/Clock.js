// Clock with calendar popup
const date = Variable('', {
    poll: [1000, 'date "+%H:%M:%S %b %e, %Y"'],
});

const CalendarPopup = () => Widget.Window({
    name: 'calendar-popup',
    anchor: ['top', 'right'],
    visible: false,
    child: Widget.Box({
        class_name: 'calendar-popup',
        child: Widget.Calendar({
            showDayNames: true,
            showHeading: true,
        }),
    }),
});

export const Clock = () => Widget.Button({
    class_name: 'clock',
    child: Widget.Label({
        label: date.bind(),
    }),
    on_primary_click: () => {
        const popup = App.getWindow('calendar-popup');
        if (popup) {
            popup.visible = !popup.visible;
        }
    },
    on_hover: () => {
        const popup = App.getWindow('calendar-popup');
        if (popup) {
            popup.visible = true;
        }
    },
    on_hover_lost: () => {
        const popup = App.getWindow('calendar-popup');
        if (popup) {
            popup.visible = false;
        }
    },
});

export { CalendarPopup };

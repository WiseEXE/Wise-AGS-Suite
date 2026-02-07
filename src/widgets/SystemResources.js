// CPU and RAM usage monitors
const divide = ([total, free]) => free / total;

const cpu = Variable(0, {
    poll: [2000, 'top -bn1', out => {
        const lines = out.split('\n').find(line => line.includes('Cpu(s)'));
        if (!lines) return 0;
        const cpuLine = lines.split(',')[0];
        const value = parseFloat(cpuLine.split(':')[1]);
        return value / 100;
    }],
});

const ram = Variable(0, {
    poll: [2000, 'free', out => {
        const lines = out.split('\n');
        const memLine = lines.find(line => line.includes('Mem:'));
        if (!memLine) return 0;
        const parts = memLine.split(/\s+/).filter(x => x);
        return divide([parseInt(parts[1]), parseInt(parts[6])]);
    }],
});

export const SystemResources = () => Widget.Box({
    class_name: 'system-resources',
    children: [
        Widget.CircularProgress({
            class_name: 'cpu',
            value: cpu.bind(),
            child: Widget.Icon('cpu-symbolic'),
            tooltip_text: cpu.bind().as(v => `CPU: ${Math.round(v * 100)}%`),
        }),
        Widget.CircularProgress({
            class_name: 'ram',
            value: ram.bind(),
            child: Widget.Icon('drive-harddisk-symbolic'),
            tooltip_text: ram.bind().as(v => `RAM: ${Math.round(v * 100)}%`),
        }),
    ],
});

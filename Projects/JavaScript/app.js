function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const timeUnits = {
        year: 365 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1
    };

    let remainingSeconds = seconds;
    const parts = [];

    for (const [unit, unitSeconds] of Object.entries(timeUnits)) {
        const count = Math.floor(remainingSeconds / unitSeconds);
        if (count > 0) {
            parts.push(count + " " + unit + (count > 1 ? "s" : ""));
        }
        remainingSeconds %= unitSeconds;
    }

    return parts.length > 1
        ? parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1]
        : parts[0];
}
console.log(formatDuration(3600));
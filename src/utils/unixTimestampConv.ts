type UnixTimestamp = number;

export const unixTimestampHHMM = (
    timestamp: UnixTimestamp
): `${string}:${string}` => {
    const date = new Date(timestamp * 1000)
        .toTimeString()
        .slice(0, 5)
        .split(':'); // JS использует миллисекунды
    return `${date[0]}:${date[1]}`;
};

function wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

function random(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    const random = Math.random();
    const next = random * (max - min + 1) + min;
    const floor = Math.floor(next);

    return floor
}

export { wait, random };
export function getRandomInt(min, max) {
    return Math.ceil(Math.random() *(max - min) + min)
}

export function generateRandomArray(length) {
    const temp = [];
    for (let i = 0; i < length; i++) {
        temp.push(getRandomInt(0, length));
    }
    return temp;
}
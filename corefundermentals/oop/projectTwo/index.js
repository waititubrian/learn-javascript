class Circle {
    #defaultLocation = { x: 0, y: 0 };

    constructor(radius) {
        this.radius = radius;
    }

    get defaultLocation() {
        return this.#defaultLocation;
    }

    draw() {
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();
console.log(circle.defaultLocation); // { x: 0, y: 0 }
console.log(circle.radius);          // 10


class Stopwatch {
    #startTime;
    #endTime;
    #running = false;
    #duration = 0;

    start() {
        if (this.#running)
            throw new Error('Stopwatch has already started.');

        this.#running = true;
        this.#startTime = new Date();
    }

    stop() {
        if (!this.#running)
            throw new Error('Stopwatch is not started.');

        this.#running = false;
        this.#endTime = new Date();

        const seconds = (this.#endTime.getTime() - this.#startTime.getTime()) / 1000;
        this.#duration += seconds;
    }

    reset() {
        this.#startTime = null;
        this.#endTime = null;
        this.#running = false;
        this.#duration = 0;
    }

    get duration() {
        return this.#duration;
    }
}

const sw = new Stopwatch();
sw.start();
setTimeout(() => {
    sw.stop();
    console.log('Duration:', sw.duration);
}, 1000);

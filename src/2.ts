import p5 from "p5";

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(500, 100);
        p.background(255);
        p.strokeWeight(5);

        p.stroke(0, 30);
        p.line(20, 50, 480, 50);

        p.stroke(20, 50, 70);

        let step = 1;
        let lastx = -999;
        let lasty = -999;
        let ynoise = p.random(10);
        let x, y;

        for (x = 20; x <= 480; x += step) {
            y = 10 + p.noise(ynoise) * 80;
            if (lastx > -999) {
                p.line(x, y, lastx, lasty);
            }
            lastx = x;
            lasty = y;
            ynoise += 0.3;
        }
    };
};

new p5(sketch);

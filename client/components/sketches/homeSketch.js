import React, { useEffect } from 'react';
import * as p5 from 'p5';

const HomeSketch = () => {
	const Sketch = (p) => {
		let c1 = p.color(22, 17, 114);
		let c2 = p.color(0, 13, 54);
		p.setup = () => {
			p.createCanvas(p.windowWidth, p.windowHeight);
			p.noLoop();
		};

		p.draw = () => {
			for (let i = 0; i < p.windowWidth; i++) {
				p.inter = p.map(i, 0, p.windowHeight, 0, 1);
				const co = p.lerpColor(c1, c2, p.inter);
				p.stroke(co);
				p.line(0, i, p.windowWidth, i);
			}
		};
	};

	useEffect(() => {
		new p5(Sketch);
	}, []);

	return <></>;
};

export default HomeSketch;

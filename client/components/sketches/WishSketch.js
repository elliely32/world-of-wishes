import React, { useEffect } from 'react';
import Link from 'react-router-dom';
import * as p5 from 'p5';

const WishSketch = (props) => {
	const wishAmount = props.wishes.length;
	const Sketch = (j) => {
		let stars = [];
		let wishSketchInd = [];
		j.setup = () => {
			j.createCanvas(j.windowWidth, j.windowHeight);
			//wish stars
			for (let i = 0; i < wishAmount; i++) {
				let x = j.random(j.windowWidth);
				let y = j.random(j.windowHeight);
				const b = new wishlet(x, y);
				wishSketchInd.push(b);
			}
			//bg stars
			for (let i = 0; i < 500; i++) {
				let star = {
					x: j.random(j.windowWidth),
					y: j.random(j.windowHeight),
				};
				stars.push(star);
			}
		};

		// function mouseClicked() {
		// 	history.push('/createWish');
		// 	console.log('clicked');
		// }

		j.draw = () => {
			j.background(0, 0, 30);
			j.frameRate(30);
			for (let k = 0; k < wishAmount; k++) {
				wishSketchInd[k].show();
			}
			for (let i = 0; i < stars.length; i++) {
				let x = stars[i].x;
				let y = stars[i].y;
				j.stroke(0, 0, 30);
				j.fill(238, 242, 255);

				j.ellipse(x, y, j.random(1, 3), j.random(1, 3));
			}
		};
		class wishlet {
			constructor(x, y) {
				this.x = x;
				this.y = y;
			}

			show() {
				stroke(255);
				strokeWeight(3);
				fill('green');
				ellipse(this.x, this.y, 20);
			}
		}
	};

	useEffect(() => {
		new p5(Sketch);
	}, []);

	return <></>;
};

export default WishSketch;

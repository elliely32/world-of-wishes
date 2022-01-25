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
				let w = new wishlet(x, y, props.wishes[i].id);
				wishSketchInd.push(w);
			}
			console.log(wishSketchInd);
			//bg stars
			for (let i = 0; i < 500; i++) {
				let star = {
					x: j.random(j.windowWidth),
					y: j.random(j.windowHeight),
				};
				stars.push(star);
			}
		};

		j.mousePressed = () => {
			for (let i = 0; i < wishSketchInd.length; i++) {
				wishSketchInd[i].clicked(j.mouseX, j.mouseY);
			}
		};

		j.draw = () => {
			j.background(0, 0, 30);
			j.frameRate(30);
			//starDraw
			for (let i = 0; i < stars.length; i++) {
				let x = stars[i].x;
				let y = stars[i].y;
				j.stroke(0, 0, 30);
				j.fill(238, 242, 255);

				j.ellipse(x, y, j.random(1, 3), j.random(1, 3));
			}

			//wishDraw
			for (let k = 0; k < wishSketchInd.length; k++) {
				wishSketchInd[k].show();
				// let x = wishSketchInd[k].x;
				// let y = wishSketchInd[k].y;

				// j.stroke(255);
				// j.fill(238, 242, 255);
				// j.ellipse(x, y, 40, 40);
			}
		};

		class wishlet {
			constructor(x, y, id) {
				this.x = x;
				this.y = y;
				this.id = id;
			}

			clicked(mx, my) {
				let d = j.dist(mx, my, this.x, this.y);
				if (d < 40) {
					props.history.push(`/wishes/${this.id}`);
				}
			}

			show() {
				j.stroke(255);
				j.fill(238, 242, 255);
				j.ellipse(this.x, this.y, 40, 40);
			}
		}
	};

	useEffect(() => {
		new p5(Sketch);
	}, []);

	return <></>;
};

export default WishSketch;

import p5 from 'p5';

export function sketch(p5) {
	p5.setup = () => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
		//p5.filter(p5.BLUR,4)
	};

	p5.draw = () => {
		p5.background('#0e0b24');
	};
}

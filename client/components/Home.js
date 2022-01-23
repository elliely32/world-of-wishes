import React from 'react';
import { connect } from 'react-redux';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import * as homeSketch from './sketches/homeSketch';

/**
 * COMPONENT
 */
export const Home = (props) => {
	const { username } = props;

	return (
		<div>
			<ReactP5Wrapper sketch={homeSketch.sketch} />
			<h1>wishes</h1>
		</div>
	);
};

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		username: state.auth.username,
	};
};

export default connect(mapState)(Home);

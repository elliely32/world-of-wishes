import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import * as homeSketch from './sketches/homeSketch';
import { fetchApprovedWishes } from '../store';

/**
 * COMPONENT
 */
class Home extends Component {
	componentDidMount() {
		this.props.fetchApprovedWishes();
	}
	render() {
		const wishes = this.props.wishes;
		return (
			<div>
				<ReactP5Wrapper sketch={homeSketch.sketch} />
				<h1>wishes</h1>
				{wishes.map((wish) => (
					<div key={wish.id}>
						<p>{wish.wishMessage}</p>
					</div>
				))}
			</div>
		);
	}
}

/**
 * CONTAINER
 */
const mapState = (state) => ({
	wishes: state.wishes,
});

const mapDispatch = (dispatch) => ({
	fetchApprovedWishes: () => dispatch(fetchApprovedWishes()),
});

export default connect(mapState, mapDispatch)(Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import WishSketch from './sketches/wishSketch';
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
		console.log(this.props);
		return (
			<div>
				<WishSketch wishes={wishes} history={this.props.history} />
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

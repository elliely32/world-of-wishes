import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeSketch from './sketches/HomeSketch';
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
		return (
			<div>
				{/* <HomeSketch /> */}
				<h1>wishes</h1>
				{/* {wishes.map((wish) => (
					<div key={wish.id}>
						
					</div>
				))} */}
				<WishSketch wishes={wishes} history={this.history} />
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

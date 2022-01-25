import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleWish } from '../store';

class SingleWish extends Component {
	componentDidMount() {
		const wishId = this.props.match.params.id;
		this.props.fetchSingleWish(wishId);
	}

	render() {
		const { wish } = this.props || {};
		console.log('props in singlewish component: ', this.props);
		return (
			<div className='singleWish'>
				<p id='wishNumber'>{wish.id}</p>
				<p id='singleWishMessage'>{wish.wishMessage}</p>
			</div>
		);
	}
}

const mapState = (state) => ({
	wish: state.wish,
});

const mapDispatch = (dispatch) => ({
	fetchSingleWish: (id) => dispatch(fetchSingleWish(id)),
});

export default connect(mapState, mapDispatch)(SingleWish);

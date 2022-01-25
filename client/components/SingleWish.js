import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleWish } from '../store/wishes';

class SingleWish extends Component {
	componentDidMount() {
		console.log('hello');
		const wishId = this.props.match.params.wishId;
		this.props.fetchSingleWish(wishId);
	}

	render() {
		const wish = this.props.wish;
		console.log('props in singlewish component: ', this.props);
		return (
			<div className='singleWish'>
				<p>{wish.id}</p>
				<p>{wish.wishMessage}</p>
			</div>
		);
	}
}

const mapState = (state) => ({
	wish: state.wishes,
});

const mapDispatch = (dispatch) => ({
	fetchSingleWish: (id) => dispatch(fetchSingleWish(id)),
});

export default connect(mapState, mapDispatch)(SingleWish);

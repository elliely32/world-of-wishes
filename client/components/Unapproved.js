import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchUnapprovedWishes,
	approveWish,
	deleteWish,
} from '../store/wishes';

class UnapprovedWishes extends Component {
	componentDidMount() {
		this.props.fetchUnapprovedWishes();
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.wishId !== prevProps.wishId) {
	// 		this.props.fetchUnapprovedWishes();
	// 	}
	// }

	render() {
		const wishes = this.props.wishes;
		return (
			<div>
				<h2>Unapproved Wishes</h2>
				{wishes.map((wish) => (
					<div key={wish.id}>
						<p>{wish.wishMessage}</p>
						<button
							onClick={(evt) => {
								evt.preventDefault();
								this.props.approveWish(wish.id);
							}}
						>
							Approve
						</button>
						<button
							onClick={(evt) => {
								evt.preventDefault();
								this.props.deleteWish(wish.id);
							}}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		);
	}
}

const mapState = (state) => ({
	wishes: state.wishes,
});

const mapDispatch = (dispatch, { history }) => ({
	fetchUnapprovedWishes: () => dispatch(fetchUnapprovedWishes()),
	approveWish: (id) => dispatch(approveWish(id, history)),
	deleteWish: (id) => dispatch(deleteWish(id, history)),
});

export default connect(mapState, mapDispatch)(UnapprovedWishes);

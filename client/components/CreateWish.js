import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createWish } from '../store/wishes';
import { Link } from 'react-router-dom';

class CreateWish extends Component {
	constructor() {
		super();
		this.state = {
			wishMessage: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		console.log('handling change');
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createWish({ ...this.state });
		this.setState({
			wishMessage: '',
		});
	}
	render() {
		const { wishMessage } = this.state;
		const { handleChange, handleSubmit } = this;
		return (
			<div>
				<h2>Make a Wish</h2>
				<form id='newWish' onSubmit={handleSubmit}>
					<label htmlFor='wishMessage'>Wish Message:</label>
					<input name='wishMessage' onChange={handleChange} value={wishMessage} />

					<button type='submit'>Submit Wish</button>
					<Link to='/'>Cancel</Link>
				</form>
			</div>
		);
	}
}

const mapDispatch = (dispatch) => ({
	createWish: (wish) => dispatch(createWish(wish)),
});

export default connect(null, mapDispatch)(CreateWish);

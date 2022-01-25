import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/AuthForm';
import Home from './components/Home';
import Unapproved from './components/Unapproved';
import CreateWish from './components/CreateWish';
import SingleWish from './components/SingleWish';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
	componentDidMount() {
		this.props.loadInitialData();
	}

	render() {
		const { isLoggedIn } = this.props;

		return (
			<div>
				{isLoggedIn ? (
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/createWish' component={CreateWish} />
						<Route exact path='/unapproved' component={Unapproved} />
						<Route exact path='/wishes/:id' component={SingleWish} />
					</Switch>
				) : (
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/createWish' component={CreateWish} />
						<Route exact path='/wishes/:id' component={SingleWish} />
						<Route path='/login' component={Login} />
					</Switch>
				)}
			</div>
		);
	}
}

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		// Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
		// Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
		isLoggedIn: !!state.auth.id,
	};
};

const mapDispatch = (dispatch) => {
	return {
		loadInitialData() {
			dispatch(me());
		},
	};
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

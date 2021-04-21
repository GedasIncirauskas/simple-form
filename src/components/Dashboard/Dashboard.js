import React, {Component } from 'react';
import { defaultUser } from '../../utils/consts';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {

	logoutHandler (e) {
		e.preventDefault();
		localStorage.clear();
		this.props.userSetHandler(defaultUser);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<h3>Welcome to my website {this.props.user.username}</h3>
				<button onClick={(e) => this.logoutHandler(e)}>Log out</button>
			</div>
		)
	};
};

const mapStateToProps = state => {
    return {
        user: state.user,
        users: state.users
    }
};

const mapDispatchToProps  = dispath => {
    return {
       userSetHandler: (user) => dispath({type: 'SET_USER', user})
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

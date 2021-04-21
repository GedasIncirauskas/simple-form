import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailValidation } from '../../utils/functions';
import './Form.scss';

class Form extends Component {
	constructor (props) {
		super (props);
		let data = localStorage.getItem('loginData');
		if(data !== null) {
			data = JSON.parse(data);
			if(data.username ==='frontend@isawesome.com' && data.password === 'cool') {
				props.history.push('/dashboard');
			}	
		} else {
			props.history.push('/');
		}
	};

	state = {
		inputValue: {
			username: '',
			password: ''
		},
		error: ''
	};

	inputChangeHandler (textValue, prop) {
		let updateText = {...this.state.inputValue};
		updateText[prop] = textValue;
		this.setState({inputValue: updateText, error: null});
	};

	submitHandler () {
		let userName = this.state.inputValue.username;
		let pass = this.state.inputValue.password;

		this.setState({error: null});
		if(userName.length === 0 || pass.length === 0) {
			this.setState({error: 'Please fill all fields!'});
			return;
		}
		if(!emailValidation(userName)) {
			this.setState({error: 'Invalid email address!'});
			return; 
		}
		const userExist = this.props.users.find(item => item.username === userName && item.password === pass);
		if(userExist) {
			localStorage.setItem('userData', JSON.stringify(this.state.inputValue));
			this.props.userSetHandler({username: userName, password: pass});
			this.props.history.push('/dashboard');
		}
	};

	render () {
		return (
			<div>
				<div className="header"><p>Login Form</p></div>
				<div className="body-input">
					<i className="fa fa-user icon admin" />
					<i className="fa fa-lock icon lock" />
					<div>
						<input
							className="input-field" 
							type="email" 
							placeholder="Username"
							value={this.state.inputValue.username}
							onChange={(event) => this.inputChangeHandler(event.target.value, 'username')}
							/>
						<input 
							type="password" 
							placeholder="Password" 
							value={this.state.inputValue.password}
							onChange={(event) => this.inputChangeHandler(event.target.value, 'password')}  
							/>
					</div>
						{this.state.error ? <span className="error-style">{this.state.error}</span> : null }
					<div className="button-style">
						<button onClick={() => this.submitHandler()}>Sign In</button>
					</div>
				</div>
			</div>
		)
	}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
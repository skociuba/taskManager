import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import '../app.css';
import { login } from '../reducers/loginReducer';

const StyledButton = styled.button`
  background-color: #ff5601;
  border: 1px solid black;
  padding: 10px;

  margin: 15px;

  color: white;
  border-radius: 6px;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: #ff5601;
    color: white;
  }
`;
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { email, password } = this.state;

    return (
      <form name='loginForm' onSubmit={this.onSubmit}>
        <div className='form-group-collection'>
          <div className='form-group'>
            <label>Email:</label>

            <input     
              type='email'
              name='email'
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
          </div>

          <div className='form-group'>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
        </div>
        <StyledButton type='submit'>Login</StyledButton>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

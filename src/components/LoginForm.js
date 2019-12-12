import React from 'react';
import {connect} from 'react-redux';
import {updateLoginForm} from '../actions/updateLoginForm'
import {login} from '../actions/login';

const LoginForm = ({loginForm, updateLoginForm, login}) => {
  const handleChange = event => {
    const {name, value} = event.target;
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(loginForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email address: </label><br/>
      <input type='email' name='email' value={loginForm.email} onChange={handleChange} /><br/><br/>
      <label>Password: </label><br/>
      <input type='password' name='password' value={loginForm.password} onChange={handleChange} /><br/><br/>
      <input type='submit' value='Log In'/><br/>
    </form>
  )
}

//this gives me an argument comins to this compoennt: {email: '...', password: '...'}
const mapStateToProps = state => {
  return {
    loginForm: state.login
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(LoginForm);
import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from 'yup';
import LoginBackground from "./../images/login-background.jpg";
import "./../app.css";

class Login extends Component {
  state = {
    account: {
      email: '',
      password: ''
    },
    errors: [],
    sending: false
  }

  schema = yup.object().shape({
    email: yup.string().email('email format is incorrect').required('The email field is required'),
    password: yup.string().min(4, 'The password must be at least four characters long')
  })

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, { abortEarly: false });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log(result);
    if (result) {
      try {
        this.setState({ sending: true })
        const response = await axios.post('https://reqres.in/api/login', result);
        localStorage.setItem('token', response.data.token);
        window.location = '/dashboard';
        this.setState({ sending: false })
        console.log(response)
      } catch (error) {
        this.setState({ sending: false })
        this.setState({ errors: ['Email or password is not correct'] })
      }
    }
  }

  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <img className="login-background" src={LoginBackground} alt="login background" style={{ overflowY: "hidden", objectFit: "cover", width: "100%", height: "100%", position: "fixed", zIndex: "-1" }} />
        <div className="login">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <input onChange={this.handleChange} placeholder="Email" value={email} id='email' name='email' className="form-control" type="text" />
            </div>
            <div className="mb-3">
              <input onChange={this.handleChange} placeholder="Password" value={password} id='password' name='password' className="form-control" type="text" />
            </div>
            {
              this.state.errors.length !== 0 && (
                <div className="alert alert-danger">
                  {
                    this.state.errors.map((e, i) => <p key={i}>{i + 1}-{e}</p>)
                  }
                </div>
              )
            }
            <button disabled={this.state.sending} className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </>
    )
  }
}

export default Login;
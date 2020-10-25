import React from 'react'
import { Button } from '../Button';
import './Login.css';
import ScriptTag from "react-script-tag";

function Login() {
    return (
        <div className="limiter">
			<ScriptTag type="text/javascript" src="/main.js" />
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						Welcome back
					</span>
					<span className="login100-form-heading">
						Gemelry
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" placeholder="Email"/>
						<span className="focus-input100" ></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
                        <i className="far fa-eye-slash"></i>
						</span>
						<input className="input100" type="password" placeholder="Password"/>
						<span className="focus-input100" ></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<Button buttonStyle='btn--outline' buttonSize='btn--large'>
								Login
							</Button>
						</div>
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

						<a className="txt2" href="/signup">
							{'\u00a0'} Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}

export default Login

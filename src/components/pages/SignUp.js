import React from 'react'
import { Button } from '../Button';
import './SignUp.css'
import ScriptTag from "react-script-tag";

function SignUp() {
    return (
        <div className="limiter">
            <ScriptTag type="text/javascript" src="/main.js" />
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
					<span className="login100-form-heading">
						Gemelry
					</span>
                    <div className='username-container' >
                        <div className="wrap-input100 validate-input" data-validate = "Username">
                            <input className="input100" type="text" placeholder="First Name"/>
                            <span className="focus-input100" ></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Username">
                            <input className="input100" type="text" placeholder="Last Name"/>
                            <span className="focus-input100"></span>
                        </div>
                    </div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" placeholder="Email"/>
						<span className="focus-input100" ></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
                        <i className="far fa-eye-slash"></i>
						</span>
						<input className="input100" type="password" placeholder="New Password"/>
						<span className="focus-input100"></span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
                        <i className="far fa-eye-slash"></i>
						</span>
						<input className="input100" type="password" placeholder="Confirm Password"/>
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<Button buttonStyle='btn--outline' buttonSize='btn--large'>
								Sign Up
							</Button>
						</div>
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							Already Registered?
						</span>

						<a className="txt2" href="/login">
							{'\u00a0'} Sign In
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}

export default SignUp

import React from 'react'
import styled from 'styled-components'
import car from './video/car.mp4'
import './index.css'
const Admin = () => {
  return (
    <Container>
        <video src={car} autoPlay loop muted/>
        <form action="" class="form-login">
		<ul class="login-nav">
			<li class="login-nav__item active">
				<a href="#">Sign In</a>
			</li>
			<li class="login-nav__item">
				<a href="#">Sign Up</a>
			</li>
		</ul>
		<label for="login-input-user" class="login__label">
			Username
		</label>
		<input id="login-input-user" class="login__input" type="text" placeholder='example@gmail.com'/>
		<label for="login-input-password" class="login__label">
			Password
		</label>
		<input id="login-input-password" class="login__input" type="password" placeholder='tour Password'/>
		<label for="login-sign-up" class="login__label--checkbox">
			<input id="login-sign-up" type="checkbox" class="login__input--checkbox" />
			Keep me Signed in
		</label>
		<button class="login__submit" disabled>Sign in</button>
	</form>
	<a href="#" class="login__forgot">Forgot Password?</a>
    </Container>
  )
}

export default Admin
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
 min-height: 100vh;
 width: 100%;
`
const LoginPage = styled.div`
  border: solid red 1px;
  width: 300px;
  height: 400px;
  z-index: 13;
`
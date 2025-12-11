import { useState } from 'react'

function Login() {
	const [login, setisLogin] = useState(true)

	return (
		<>
			<div>
				<h2>Sign In</h2>
				<p>Enter your email and password to sign in!</p>
				<form action='/login' method='post'>
					<div class='form-group'>
						<label for='username'>Email</label>
						<input type='email' name='username' required />
					</div>
					<div class='form-group'>
						<label for='password'>Password</label>
						<input type='password' id='password' name='password' required />
					</div>
					<button type='submit'>Sign in</button>
				</form>
				<p>
					<a href='#'>Not registered yet? Create an Account</a>
				</p>
			</div>
		</>
	)
}

export default Login

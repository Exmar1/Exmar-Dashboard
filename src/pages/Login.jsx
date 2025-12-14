import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate()

	function handleNavigate()  {
		if(email.trim() !== ''  && password.trim() !== '' ) {
			navigate('/')
		}else{
			 alert('Заполните все поля!')
		}
	}

	return (
		<>
			<div className='min-h-screen bg-[#0b1437] flex flex-col items-center justify-center px-4 relative'>
				<i className='fa-solid fa-arrow-left text-gray-300  absolute bottom-191 left-150'></i>
				<Link className='text-gray-300 absolute bottom-190 left-155 mx-2' to={"/"}>Back to Home</Link>
				
				<div className='w-full max-w-md'>
					<div className='mb-8'>
						<h2 className='text-white text-4xl font-bold mb-3'>Sign In</h2>
						<p className='text-[#a3aed0] text-base'>Enter your email and password to sign in!</p>
					</div>

					<form className='space-y-6'>
						
						<div>
							<label htmlFor='email' className='block text-white text-sm font-medium mb-2'>
								Email<span className='text-red-500'>*</span>
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={email}
        				onChange={(e) => setEmail(e.target.value)}
								placeholder='mail@simmmple.com'
								required
								className='w-full px-4 py-3 bg-[#0f1535] border border-[#2d3748] rounded-2xl text-white placeholder:text-[#a3aed0]/50 focus:outline-none focus:border-[#7551FF]'
							/>
						</div>

						
						<div>
							<label htmlFor='password' className='block text-white text-sm font-medium mb-2'>
								Password<span className='text-red-500'>*</span>
							</label>
							<input
								type='password'
								required
								id='password'
								name='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Min. 8 characters'
								className='w-full px-4 py-3 bg-[#0f1535] border border-[#2d3748] rounded-2xl text-white placeholder:text-[#a3aed0]/50 focus:outline-none focus:border-[#7551FF]'
							/>
						</div>

						
						<div className='flex items-center justify-between'>
							<label className='flex items-center gap-2 cursor-pointer'>
								<input type='checkbox' className='w-4 h-4 rounded' />
								<span className='text-[#a3aed0] text-sm'>Keep me logged in</span>
							</label>
							<a href='#' className='text-[#a3aed0] text-sm font-medium'>
								Forgot password?
							</a>
						</div>

						
						<button 
							onClick={handleNavigate} 
							type='button'
							className='flex w-full justify-center items-center py-3 bg-[#7551FF] text-white font-semibold rounded-2xl'
						>
							Sign In
						</button>
					</form>

					
					<p className='text-center mt-6 text-[#a3aed0] text-sm'>
						Not registered yet?{' '}
						<a href='#' className='text-white font-semibold'>
							Create an Account
						</a>
					</p>
				</div>

				<footer className='absolute bottom-8 text-center'>
					<p className='text-[#a3aed0] text-sm'>
						© 2025 Exmar UI. All Rights Reserved. Made with love by{' '}
						<a href='#' className='text-white font-semibold hover:text-[#7551FF]'>
							Exmar!
						</a>
					</p>
				</footer>
			</div>
		</>
	)
}

export default Login
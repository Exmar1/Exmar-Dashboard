import { useState } from 'react'
import { LuMoon, LuSun } from "react-icons/lu"
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../components/ThemeSetter/ThemeSet'

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate()
	
	const { theme, toggleTheme } = useTheme()

	function handleNavigate()  {
		if(email.trim() !== ''  && password.trim() !== '' ) {
			navigate('/')
		}else{
			 alert('Заполните все поля!')
		}
	}

	return (
		<>
			<div className='min-h-screen dark:bg-[#0b1437] bg-gray-50 flex flex-col items-center justify-center px-4 relative transition-colors duration-300'>
				<div className='absolute top-8 left-8 flex items-center gap-2'>
					<i className='fa-solid fa-arrow-left dark:text-gray-300 text-gray-900'></i>
					<Link className='dark:text-gray-300 text-gray-900 dark:hover:text-white hover:text-gray-700 transition' to={"/"}>
						Back to Home
					</Link>
				</div>
				
				<div className='w-full max-w-md'>
					<div className='mb-8'>
						<h2 className='dark:text-white text-gray-900 text-4xl font-bold mb-3 transition-colors duration-300'>Sign In</h2>
						<p className='dark:text-[#a3aed0] text-gray-600 text-base transition-colors duration-300'>
							Enter your email and password to sign in!
						</p>
					</div>

					<form className='space-y-6'>
						<div>
							<label htmlFor='email' className='block dark:text-white text-gray-900 text-sm font-medium mb-2 transition-colors duration-300'>
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
								className='w-full px-4 py-3 dark:bg-[#0f1535] bg-white border dark:border-[#2d3748] border-gray-300 rounded-2xl dark:text-white text-gray-900 dark:placeholder:text-[#a3aed0]/50 placeholder:text-gray-400 focus:outline-none dark:focus:border-[#7551FF] focus:border-indigo-500 transition-colors duration-300'
							/>
						</div>

						
						<div>
							<label htmlFor='password' className='block dark:text-white text-gray-900 text-sm font-medium mb-2 transition-colors duration-300'>
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
								className='w-full px-4 py-3 dark:bg-[#0f1535] bg-white border dark:border-[#2d3748] border-gray-300 rounded-2xl dark:text-white text-gray-900 dark:placeholder:text-[#a3aed0]/50 placeholder:text-gray-400 focus:outline-none dark:focus:border-[#7551FF] focus:border-indigo-500 transition-colors duration-300'
							/>
						</div>

						
						<div className='flex items-center justify-between'>
							<label className='flex items-center gap-2 cursor-pointer'>
								<input type='checkbox' className='w-4 h-4 rounded accent-indigo-500' />
								<span className='dark:text-[#a3aed0] text-gray-600 text-sm transition-colors duration-300'>
									Keep me logged in
								</span>
							</label>
							<a href='#' className='text-indigo-500 text-sm font-medium hover:text-indigo-600 transition'>
								Forgot password?
							</a>
						</div>

						
						<button 
							onClick={handleNavigate} 
							type='button'
							className='flex w-full justify-center items-center py-3 bg-[#7551FF] text-white font-semibold rounded-2xl hover:bg-[#6441ee] active:scale-95 transition-all duration-200 shadow-lg'
						>
							Sign In
						</button>
					</form>

					
					<p className='text-center mt-6 dark:text-[#a3aed0] text-gray-600 text-sm transition-colors duration-300'>
						Not registered yet?{' '}
						<a href='#' className='text-indigo-500 font-semibold hover:text-indigo-600 transition'>
							Create an Account
						</a>
					</p>
				</div>

				<button
					onClick={toggleTheme}
					className="fixed bottom-8 right-8 w-12 h-12 rounded-full dark:bg-white bg-gray-900 shadow-xl flex items-center justify-center dark:text-gray-900 text-white hover:scale-110 transition-transform duration-200"
					aria-label="Toggle theme"
				>
					{theme === 'dark' ? <LuSun className="text-2xl" /> : <LuMoon className="text-2xl" />}
				</button>

				<footer className='absolute bottom-8 text-center'>
					<p className='dark:text-[#a3aed0] text-gray-500 text-sm transition-colors duration-300'>
						© 2025 Exmar UI. All Rights Reserved. Made with love by{' '}
						<a href='#' className='dark:text-white text-gray-900 font-semibold hover:text-[#7551FF] transition'>
							Exmar!
						</a>
					</p>
				</footer>
			</div>
		</>
	)
}

export default Login
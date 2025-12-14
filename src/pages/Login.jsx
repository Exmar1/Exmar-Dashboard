import { Link } from 'react-router-dom'

function Login() {
	return (
		<>
			<div className='min-h-screen bg-[#0b1437] flex items-center justify-center px-4'>
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
								id='password'
								name='password'
								placeholder='Min. 8 characters'
								required
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

						
						<Link className='flex w-full justify-center items-center py-3 bg-[#7551FF] text-white font-semibold rounded-2xl' to={'/'}>Sign In
						</Link>
					</form>

					
					<p className='text-center mt-6 text-[#a3aed0] text-sm'>
						Not registered yet?{' '}
						<a href='#' className='text-white font-semibold'>
							Create an Account
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default Login
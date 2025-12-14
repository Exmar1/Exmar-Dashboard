import Sunicon from './Sunicon'

function Header() {
	return (
		<header className=' bg-[#0b1437]'>
			<div>
				<a href='#'>
					Home / <a href='#'>Pages path</a>
				</a>
				<h1>Local Pages</h1>
				<div>
					<form action='/search'>
						<input type='search' placeholder='Type here...' />
						<button>
							<Sunicon size={20} />
						</button>
						<button>
							<span>Account</span>
						</button>
					</form>
				</div>
			</div>
		</header>
	)
}

export default Header

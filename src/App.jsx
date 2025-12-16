import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Settings from './pages/Settings'
import Users from './pages/Users'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '*',
				element: <Home />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './components/ThemeSetter/ThemeSet'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import Settings from './pages/Settings/Settings'
import Users from './pages/Users/Users'

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
	return (
	<ThemeProvider>
      <RouterProvider router={router} />
  </ThemeProvider>
	)
}

export default App
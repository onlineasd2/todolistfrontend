import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TaskDetail from './Task.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: (
			<div>
				<h2>404 Страница не нейдена</h2>
			</div>
		),
	},
	{
		path: '/task/:taskid',
		element: <TaskDetail />,
	},
],
	{ basename: '/todolistfrontend/' },)

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
	Outlet,
	Link,
} from 'react-router-dom';
import ClassComponentSamplePage from './pages/ClassComponentSamplePage';
// V6 React Router Dom
const router = createBrowserRouter([
	{
		path: '',
		Component: App, // ilk istek geldiğinde App componente yönlenip sayfaları APP component üzerinden dinamik olarak doma yüklemek.
		children: [
			{
				path: 'class-component',
				Component: ClassComponentSamplePage,
			},
			{
				path: 'function-component',
				Component: null,
			},
			{
				path: 'ui-kit-component',
			},
			{
				path: 'local-state',
				Component: null,
			},
		],
	},
	{
		path: 'admin',
		element: (
			<>
				Admin Page
				<Outlet />
			</>
		),
		children: [
			{
				path: 'users',
				element: <>Admin Users</>,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<RouterProvider router={router} />
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

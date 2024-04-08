import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div style={{ padding: '20px' }}>
			<nav>
				<Link to="/">Home</Link>{' '}
				<Link to="/class-component">Class Component</Link>
				<a href="/"> Home With Href</a>
			</nav>

			<main>
				Home Page
				{/* dinamik olarak içeriğin değişeceği kısmı temsil eder. */}
				<Outlet />
			</main>
		</div>
	);
}

export default App;

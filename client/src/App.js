import './App.css';
import Header from './comps/header/Header';
import Post from './comps/post/Post';
import { Route, Routes } from 'react-router-dom';
import Layout from './comps/layout/Layout';

function App() {
	return (
		<Routes>
			<Route
				index
				element={
					<main>
						<Header />
						<Post />
						<Post />
						<Post />
					</main>
				}
			/>
			<Route
				path='/login'
				element={
					<main>
						<Header />
						<div>login page</div>
					</main>
				}
			/>
			<Route path='/test' element={<Layout />} />
		</Routes>
	);
}

export default App;

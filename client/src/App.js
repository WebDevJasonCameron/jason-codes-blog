import './App.css';
import Header from './comps/header/Header';
import Post from './comps/post/Post';
import { Route, Routes } from 'react-router-dom';
import Layout from './comps/layout/Layout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Post />} />
				<Route path={'/login'} element={<div>Login page</div>} />
			</Route>
		</Routes>
	);
}

export default App;

import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
const base = '/plateup-leaderboard';
const App = () => (
	<div id="app">
		{/* <Header /> */}
		<main>
			<Router>
				<Route path={base} component={Home} />
				<Route default component={Home} />
			</Router>
		</main>
	</div>
);

export default App;

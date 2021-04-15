import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Project from './components/Project';
import NavBar from './components/NavBar';
function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route component={About} path='/about' />
					<Route component={SinglePost} path='/post/:slug' />
					<Route component={Post} path='/post' />
					<Route component={Project} path='/project' />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

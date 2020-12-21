import './App.css';
import { Nav } from '../nav/nav';
import { ScrollingWheels } from '../scrolling-wheels/ScrollingWheels';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className={'app'}>
			<Nav className={'navWrapper'} />
			<Switch>
				<Route path={'/'} exact>
					<ScrollingWheels />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

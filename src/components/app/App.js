import './App.css';
import { Nav } from '../nav/nav';
import { ScrollingWheels } from '../scrolling-wheels/ScrollingWheels';

function App() {
	return (
		<div className={'app'}>
			<Nav className={'navWrapper'} />
			<ScrollingWheels />
		</div>
	);
}

export default App;

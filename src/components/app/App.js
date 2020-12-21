import './App.css';
import { Nav } from '../nav/nav';

function App() {
	return (
		<div className={'app'}>
			<Nav className={'navWrapper'} />
			<div className={'contentArea'}></div>
		</div>
	);
}

export default App;

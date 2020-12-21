import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './ScrollingWheels.css';

export function ScrollingWheels() {
	return (
		<div className={'content'}>
			<Switch>
				<Route path="/" exact>
					<section id="top" className={'home'}>
						<h1>Home</h1>
					</section>
					<section id="1950" className={'wheel1950'}>
						<h2>1950</h2>
					</section>
					<section id="1960" className={'wheel1960'}>
						<h2>1960</h2>
					</section>
					<section id="1970" className={'wheel1970'}>
						<h2>1970</h2>
					</section>
				</Route>
				<Route>404</Route>
			</Switch>
		</div>
	);
}

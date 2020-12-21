import React from 'react';
import { Route, Switch } from 'react-router-dom';

export function ScrollingWheels() {
	return (
		<Switch>
			<Route path={'/'} exact>
				Home
			</Route>
		</Switch>
	);
}

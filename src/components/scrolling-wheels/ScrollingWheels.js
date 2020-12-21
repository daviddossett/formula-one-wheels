import React from 'react';
import { Route, Switch } from 'react-router-dom';

export function ScrollingWheels() {
	return (
		<Switch>
			<Route path={'/'} exact>
				Home
			</Route>
			<Route path={'/1950'} exact>
				1950
			</Route>
			<Route path={'/1960'} exact>
				1960
			</Route>
			<Route path={'/1970'} exact>
				1970
			</Route>
			<Route path={'/1980'} exact>
				1980
			</Route>
			<Route path={'/1990'} exact>
				1990
			</Route>
			<Route path={'/2000'} exact>
				2000
			</Route>
			<Route path={'/2010'} exact>
				2010
			</Route>
			<Route path={'/2020'} exact>
				2020
			</Route>
		</Switch>
	);
}

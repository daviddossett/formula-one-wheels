import React from 'react';
import './nav.css';

export function Nav({ className }) {
	return (
		<nav className={`${className} nav`}>
			<li>Logo</li>
			<li>1950</li>
			<li>1960</li>
			<li>1970</li>
			<li>1980</li>
			<li>1990</li>
			<li>2000</li>
			<li>2010</li>
			<li>2020</li>
		</nav>
	);
}

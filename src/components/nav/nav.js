import React from 'react';
import './nav.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

export function Nav({ className }) {
	return (
		<nav className={`${className} nav`}>
			<NavLink to="/">
				<img src={logo} alt="Formula 1 logo" />
			</NavLink>
			<NavLink to="/1950">1950</NavLink>
			<NavLink to="/1960">1960</NavLink>
			<NavLink to="/1970">1970</NavLink>
			<NavLink to="/1980">1980</NavLink>
			<NavLink to="/1990">1990</NavLink>
			<NavLink to="/2000">2000</NavLink>
			<NavLink to="/2010">2010</NavLink>
			<NavLink to="/2020">2020</NavLink>
		</nav>
	);
}

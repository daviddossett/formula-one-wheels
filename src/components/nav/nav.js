import React from 'react';
import './Nav.css';
import logo from '../../images/logo.svg';
import { NavHashLink } from 'react-router-hash-link';

export function Nav({ className }) {
	return (
		<nav className={`${className} nav`}>
			<a href={'/'}>
				<img src={logo} alt="Logo" />
			</a>
			<NavHashLink to={'#1950'} smooth activeClassName={'activeNavItem'}>
				1950
			</NavHashLink>
			<NavHashLink to={'#1960'} smooth activeClassName={'activeNavItem'}>
				1960
			</NavHashLink>
			<NavHashLink to={'#1970'} smooth activeClassName={'activeNavItem'}>
				1970
			</NavHashLink>
			<NavHashLink to={'#1980'} smooth activeClassName={'activeNavItem'}>
				1980
			</NavHashLink>
			<NavHashLink to={'#1990'} smooth activeClassName={'activeNavItem'}>
				1990
			</NavHashLink>
			<NavHashLink to={'#2000'} smooth activeClassName={'activeNavItem'}>
				2000
			</NavHashLink>
			<NavHashLink to={'#2010'} smooth activeClassName={'activeNavItem'}>
				2010
			</NavHashLink>
			<NavHashLink to={'#2020'} smooth activeClassName={'activeNavItem'}>
				2020
			</NavHashLink>
		</nav>
	);
}

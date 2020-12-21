import React from 'react';
import './Nav.css';
import logo from '../../images/logo.svg';
import { HashLink, NavHashLink } from 'react-router-hash-link';

function StyledNavItem({ children, to }) {
	return (
		<NavHashLink smooth to={to} exact={true} activeClassName={'activeNavItem'}>
			{children}
		</NavHashLink>
	);
}

export function Nav({ className }) {
	return (
		<nav className={`${className} nav`}>
			<a href={'/'}>
				<img src={logo} alt="Logo" />
			</a>
			<StyledNavItem to={'#1950'}>1950</StyledNavItem>
			<StyledNavItem to={'#1960'}>1960</StyledNavItem>
			<StyledNavItem to={'#1970'}>1970</StyledNavItem>
			<StyledNavItem to={'#1980'}>1980</StyledNavItem>
			<StyledNavItem to={'#1990'}>1990</StyledNavItem>
			<StyledNavItem to={'#2000'}>2000</StyledNavItem>
			<StyledNavItem to={'#2010'}>2010</StyledNavItem>
			<StyledNavItem to={'#2020'}>2020</StyledNavItem>
		</nav>
	);
}

import React from 'react';
import './nav.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function StyledNavItem({ children, to }) {
	return (
		<NavLink to={to} exact={true} activeClassName={'activeNavItem'}>
			{children}
		</NavLink>
	);
}

export function Nav({ className }) {
	return (
		<nav className={`${className} nav`}>
			<StyledNavItem to={'/'}>
				<img src={logo} alt="Logo" />
			</StyledNavItem>
			<StyledNavItem to={'/1950'}>1950</StyledNavItem>
			<StyledNavItem to={'/1960'}>1950</StyledNavItem>
			<StyledNavItem to={'/1970'}>1950</StyledNavItem>
			<StyledNavItem to={'/1980'}>1950</StyledNavItem>
			<StyledNavItem to={'/1990'}>1950</StyledNavItem>
			<StyledNavItem to={'/2000'}>1950</StyledNavItem>
			<StyledNavItem to={'/2010'}>1950</StyledNavItem>
			<StyledNavItem to={'/2020'}>1950</StyledNavItem>
		</nav>
	);
}

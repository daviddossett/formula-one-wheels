import React from 'react';
import './nav.css';
import logo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

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
			<Link to={'/'}>
				<img src={logo} alt="Logo" />
			</Link>
			<StyledNavItem to={'/1950'}>1950</StyledNavItem>
			<StyledNavItem to={'/1960'}>1960</StyledNavItem>
			<StyledNavItem to={'/1970'}>1970</StyledNavItem>
			<StyledNavItem to={'/1980'}>1980</StyledNavItem>
			<StyledNavItem to={'/1990'}>1990</StyledNavItem>
			<StyledNavItem to={'/2000'}>2000</StyledNavItem>
			<StyledNavItem to={'/2010'}>2010</StyledNavItem>
			<StyledNavItem to={'/2020'}>2020</StyledNavItem>
		</nav>
	);
}

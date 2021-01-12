import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './ScrollingWheels.css';

export function ScrollingWheels({ getCurrentSection }) {
	const history = useHistory();

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const containerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intersectionHandler(entry);
				}
			});
		}, containerOptions);

		sections.forEach((section) => {
			observer.observe(section);
		});

		function intersectionHandler(entry) {
			getCurrentSection(entry.target.id);
			history.replace(`#${entry.target.id}`);
		}
	}, [getCurrentSection, history]);

	return (
		<div className={'content'}>
			<Switch>
				<Route path="/" exact>
					<section id="top" className={'about'}>
						<div className={'icon-placeholder'} />
						<h1 className={'hero-header'}>Steering Wheels of Formula One</h1>
						<p className={'hero-description'}>A brief overview of the most exciting wheels ever</p>
						<div className={'image-placeholder'} />
					</section>
					{/* <section id="1950" className={'wheel1950'}>
						<h2>1950</h2>
					</section> */}
				</Route>
				<Route>404</Route>
			</Switch>
		</div>
	);
}

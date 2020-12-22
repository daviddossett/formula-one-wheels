import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './ScrollingWheels.css';

export function ScrollingWheels() {
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
			console.log(entry.target.id);
		}
	});

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
					<section id="1970" className={'wheel1970'}>
						<h2>1970</h2>
					</section>
				</Route>
				<Route>404</Route>
			</Switch>
		</div>
	);
}

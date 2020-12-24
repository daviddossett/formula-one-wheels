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
					<section id="1980" className={'wheel1980'}>
						<h2>1980</h2>
					</section>
					<section id="1990" className={'wheel1990'}>
						<h2>1990</h2>
					</section>
					<section id="2000" className={'wheel2000'}>
						<h2>2000</h2>
					</section>
					<section id="2010" className={'wheel2010'}>
						<h2>2010</h2>
					</section>
					<section id="2020" className={'wheel2020'}>
						<h2>2020</h2>
					</section>
				</Route>
				<Route>404</Route>
			</Switch>
		</div>
	);
}

import React from 'react';
import './ScrollingWheels.css';

export function ScrollingWheels() {
	return (
		<div className={'content'}>
			<section id="home">
				<h1>Home</h1>
				<p>Some content</p>
				<div className={'homeImage'} />
			</section>
			<section id="1950">
				<h2>1950</h2>
				<p>Some content</p>
				<div className={'image1950'} />
			</section>
		</div>
	);
}

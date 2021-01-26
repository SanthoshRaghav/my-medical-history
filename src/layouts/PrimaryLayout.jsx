import React from 'react';
import { Sidebar } from '../components/ui/navigation/Sidebar';
import { Content } from '../components/ui/content/Content';
// import './PrimaryLayout.scss';

const PrimaryLayout = () => {
	return (
		<main className='main'>
			<nav className='main__nav'>
				<Sidebar />
			</nav>
			<section className='main__content'>
				<Content />
			</section>
		</main>
	);
};

export default PrimaryLayout;

import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
function HomeMock(props) {
	return (
		<>
			<Header/>
			<section className='section-calculator row container-fluid'>
			{props.children}
			</section>
			<Footer/>
		</>
	)
}

export default HomeMock;
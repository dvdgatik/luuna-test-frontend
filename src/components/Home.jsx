import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
function Home(props) {
	return (
		<>
			<Header/>
			<section className='row container-fluid'>
			{props.children}
			</section>
			<Footer/>
		</>
	)
}

export default Home;
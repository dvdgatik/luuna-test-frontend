import React from 'react';
import styled  from 'styled-components';

const Section = props =>  {
	return (
		<>
		<section className={props.className}>
		{props.children}
		</section>
		</>
	);
}


const styledSection =  styled(Section)`    
	padding-top:10px
`;
export default styledSection;
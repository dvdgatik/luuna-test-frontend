import React from 'react';
import styled from 'styled-components';

const StyledTitle =  styled.h2`
	text-align: center;
	padding: 20px 0px;
	&:after{
		    content: '';
		    display: block;
		    width: 0;
		    height: 2px;
		    margin: 10px auto;
		    background: #002355;
		    transition: width .3s;
  	};
  	&:hover: {
  		&:after {
  			width: 20%;
    		transition: width .3s;
  		}
  	}
  	
  		
`;
const Title = props =>  <StyledTitle className='title-calculator cool-link'>{props.title}</StyledTitle> 

export default Title;
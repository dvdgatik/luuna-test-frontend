import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Input = styled.input`
	/**background:#000;**/
	padding: 10px 30px;
    	
  	};
`;
const Button = styled.button`
	background:#002355;
`;
const StyledSection = styled(Section)`
	/*background: blue;*/
	padding: 20px;
	width: 100%;
    margin: 50px auto;

   @media (min-width: 968px) {
    width: 30%;
  }

`;


const Search = props => {
	const {handleSearch} = props;
	const {handleClick} = props;

	return(
	<StyledSection>
		<div className="input-group">
	    <Input  onChange={(event)=> handleSearch(event)} type="text" className="form-control" placeholder={`Search ${props.name_input}`}/>
	    <div className="input-group-append">
	      <Button onClick={()=>handleClick()} className="btn btn-secondary" type="button">
	         <FontAwesomeIcon icon="search" />
	      </Button>
	    </div>
	  </div>
	</StyledSection>
	);
}

export default Search;
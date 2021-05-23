import React from 'react';
import styled from 'styled-components'

const DivCard = styled.div`
  flex: 1 0 30% !important;
  border-radius: 20px !important;
  box-shadow: 1px 2px 3px #c6c6c6;
  margin: 20px !important;

`;
const PDesc = styled.p`
  min-height:100px;
`;
const Img  = styled.img`
  border-radius:50% !important;
  width: 30%;
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  margin-bottom:20px;
`;

const H3 = styled.h3`
  text-align:center;
  color:#F71111;
`;


const Repos = props => {
 
//console.log(props.repos.items);

return(
<>
<H3>{props.notfound}</H3>
<div className="card-group">
    {

      props.repos?.map((value, key)=>(
      <DivCard key={key} className="card">
        {/*<img class="card-img-top" src="..." alt="Card image cap"/>**/}
        <div className="card-body ">
          <h5 className="card-title"><strong>Repo: </strong> <a href={value.html_url}>{value.name}</a></h5>
          <PDesc className="card-text">{value.description}</PDesc>
          <p className="card-text text-center">
          <Img className="card-img-top" src={value.owner.avatar_url} alt="Card image cap"/>
           <strong>Owner:</strong> <a href="">{value.owner.login}</a>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted"><strong>
          <a href={value.owner.html_url}>{value.owner.html_url}</a>
          </strong></small>
        </div>
      </DivCard>
        ))
    }
  </div>
  </>

  )
	
}

export default Repos;
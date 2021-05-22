import React from 'react';
import styled from 'styled-components';
const DivCard = styled.div`
  flex: 1 0 30% !important;
  border-radius: 20px !important;
  box-shadow: 1px 2px 3px #c6c6c6;
  margin: 20px !important;

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

const Users = props => {

	return(
    <>
    <H3>{props.notfound}</H3>
		<div className="card-group">
    {

      props.users.map((value, key)=>(
      <DivCard key={key} className="card">
        <div className="card-body ">
          <h5 className="card-title"><strong>Username: </strong> <a href={value.html_url}>{value.login}</a></h5>
          <p className="card-text">Followers</p>
          <p className="card-text text-center">
          <Img className="card-img-top" src={value.avatar_url} alt="Card image cap"/>
          </p>
        </div>
       <div className="card-footer">
          <small className="text-muted"><strong>
          <a href={value.html_url}>{value.html_url}</a>
          </strong></small>
        </div>
      </DivCard>
        ))
    }
  </div>
  </>
	)
}

export default Users;
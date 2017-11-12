import React from 'react';
import { NavLink } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
	// <div>
	// 	<h5>User #{match.params.userId} details</h5>
	//   <nav className="context-nav">
	//     <NavLink to={`${match.params.userId}/edit`} exact activeClassName="active">Edit user</NavLink>
	//   </nav>
 //  </div>

    //  <CardMedia
    //   overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    // >
    //   <img src="images/nature-600-337.jpg" alt="" />
    // </CardMedia>

const UserDetailsPage = ({ match }) => (

  <Card>
    <CardHeader
      title={`User #${match.params.userId} details`}
      subtitle=""
      avatar="images/jsa-128.jpg"
    />
    <CardTitle 
    	title={`User #${match.params.userId} details`}
    	subtitle="" 
    />
    <CardText>
    </CardText>
    <CardActions>
      <FlatButton label="Delete" />
      <FlatButton label="Edit user data" primary href={`${match.params.userId}/edit`}/>
    />
    </CardActions>
  </Card>
)

export default UserDetailsPage;
import React from 'react';
import { NavLink } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

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
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const GameDetailsPage = ({ match }) => (
  <Card>
    <CardHeader
      title={`Game #${match.params.gameId} details`}
      subtitle=""
      avatar="images/jsa-128.jpg"
    />
    <CardTitle 
    	title={`Game #${match.params.gameId} details`}
    	subtitle="" 
    />
    <CardText>
    </CardText>
    <CardActions>
      <FlatButton label="Delete" />
      <FlatButton label="Edit game" primary href={`${match.params.gameId}/edit`}/>
    />
    </CardActions>
  </Card>
)

export default GameDetailsPage;
import React from 'react';
import { Link } from 'react-router-dom'


const GamesPage = ({ match }) => (
  <div>
    Browse Games
    <ul>
      <li><Link to={`${match.path}/1`}>1</Link></li>
      <li><Link to={`${match.path}/2`}>2</Link></li>
      <li><Link to={`${match.path}/3`}>3</Link></li>
      <li><Link to={`${match.path}/4`}>4</Link></li>
    </ul>
  </div>
)

export default GamesPage;
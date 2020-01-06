import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class FooterLoggedOut extends React.Component {
  render() {
    return (
      <div>
        <Segment basic></Segment>
        <Segment attached='bottom' textAlign={'center'} secondary>
          <p><Link className='footer-para' to='/about'>About Share My Bike</Link></p>
          <p>{'\u00a9'} Share My Bike 2020. All rights reserved</p>
        </Segment>
      </div>
    )
  }
}

export default FooterLoggedOut;

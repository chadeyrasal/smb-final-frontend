import React from 'react';
import { Segment } from 'semantic-ui-react';

class FooterLoggedIn extends React.Component {
  render() {
    return (
      <div>
        <Segment attached='bottom' secondary>
          <h5>You are logged in as ...</h5>
        </Segment>
      </div>
    )
  }
}

export default FooterLoggedIn;

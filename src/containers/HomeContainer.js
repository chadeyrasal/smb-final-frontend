import React from 'react';
import BicycleImage from '../images/black-bicycle.jpg';
import { Image } from 'semantic-ui-react';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Image src={BicycleImage} fluid />
      </div>
    )
  }
}

export default HomeContainer;

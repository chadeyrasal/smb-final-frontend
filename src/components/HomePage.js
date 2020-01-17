import React from 'react';
import BicycleImage from '../images/black-bicycle.jpg';
import { Image } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <div>
      <Image src={BicycleImage} fluid />
    </div>
  )
}

export default HomePage;

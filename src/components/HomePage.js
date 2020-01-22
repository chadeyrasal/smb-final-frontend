import React from 'react';
import BicycleImage from '../images/black-bicycle.jpg';
import { Image } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <div>
      <Image className='homepage-image' src={BicycleImage} size='huge' centered/>
    </div>
  )
}

export default HomePage;

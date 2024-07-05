import React from 'react';
import Rive from '@rive-app/react-canvas';

const RiveAnimation = () => {
  return (
    <Rive
      src="./eyes_following_cursor.riv"
      style={{ width: '400px', height: '400px' }}
      
    />
  );
};

export default RiveAnimation;
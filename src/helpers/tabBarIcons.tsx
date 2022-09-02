import React from 'react';
import GalleryIcon from '../assets/GalleryIcon';
import TakePictureIcon from '../assets/TakePictureIcon';

export const tabBarIcons = (route: string, focused: boolean) => {
  let icon: Element = '';

  const strokeColor = focused ? '#5534A5' : '#2c8367';
  switch (route) {
    case 'StackMain':
      icon = <GalleryIcon stroke={strokeColor} width={33} height={44} />;
      break;
    case 'StackTakePicture':
      icon = <TakePictureIcon stroke={strokeColor} width={30} height={40} />;
      break;

    default:
      icon = <></>;
  }
  return icon;
};

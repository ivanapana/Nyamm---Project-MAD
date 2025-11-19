// src/components/atoms/Icon/index.js

import React from 'react';

// Impor SVG dari folder assets/images
import ChefHatIcon from '../../../assets/images/chef-hat-svgrepo-com.svg';
import CalendarIcon from '../../../assets/images/rencana.svg';
import CartIcon from '../../../assets/images/belanja.svg';
import ClockIcon from '../../../assets/images/calendar.svg';
import UserIcon from '../../../assets/images/profil.svg';
import MailIcon from '../../../assets/images/mail.svg';
import LockIcon from '../../../assets/images/lock.svg';
// import EyeIcon from '../../../assets/images/eye.svg';
// import EyeOffIcon from '../../../assets/images/eyeOff.svg';
import SearchIcon from '../../../assets/images/search.svg';
//import PlusIcon from '../../../assets/images/plus.svg';
import FridgeIcon from '../../../assets/images/kulkasku.svg';
//import CheckIcon from '../../../assets/images/check.svg';

const Icon = ({name, size = 24, color = '#000'}) => {
  const svgProps = {
    width: size,
    height: size,
    fill: color,
  };

  switch (name) {
    case 'chef':
      return <ChefHatIcon {...svgProps} />;
    case 'calendar':
      return <CalendarIcon {...svgProps} />;
    case 'cart':
      return <CartIcon {...svgProps} />;
    case 'clock':
      return <ClockIcon {...svgProps} />;
    case 'user':
      return <UserIcon {...svgProps} />;
    case 'mail':
      return <MailIcon {...svgProps} />;
    case 'lock':
      return <LockIcon {...svgProps} />;
    // case 'eye':
    //   return <EyeIcon {...svgProps} />;
    // case 'eyeOff':
    //   return <EyeOffIcon {...svgProps} />;
    case 'search':
      return <SearchIcon {...svgProps} />;
    // case 'plus':
    //   return <PlusIcon {...svgProps} />;
    case 'fridge':
      return <FridgeIcon {...svgProps} />;
    case 'check':
    // return <CheckIcon {...svgProps} />;
    default:
      return <UserIcon {...svgProps} />;
  }
};

export default Icon;

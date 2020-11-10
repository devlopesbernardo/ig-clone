import React from 'react';
import {
  Name,
  ProfileWrapper,
  Username,
  Icon,
  Image,
  NameWrapper,
} from './components';

export default function Profile() {
  return (
    <ProfileWrapper>
      <Icon>
        <Image src="https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117355081_323465445472355_8172838030574485770_n.jpg?_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=H7_RRAIUdzgAX_nsBbE&oh=7c2fa27a424f3439467c49fc0ff48d9f&oe=5FD3A082" />
      </Icon>
      <NameWrapper>
        <Username>eumesmobernas</Username>
        <Name>Bernardo Lopes</Name>
      </NameWrapper>
    </ProfileWrapper>
  );
}

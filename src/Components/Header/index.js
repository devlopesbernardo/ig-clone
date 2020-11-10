import React from 'react';
import {
  Icon,
  IconRow,
  Image,
  Input,
  Logo,
  MainWrapper,
  Search,
  LogoImage,
} from './components';

export default function Header() {
  return (
    <MainWrapper>
      <Logo>
        <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </Logo>
      <Search>
        <Input type="text" autoCapitalize="none" placeholder="🔎 Pesquisar" />
      </Search>
      <IconRow>
        <Icon>
          <Image src="https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117355081_323465445472355_8172838030574485770_n.jpg?_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=H7_RRAIUdzgAX_nsBbE&oh=7c2fa27a424f3439467c49fc0ff48d9f&oe=5FD3A082"></Image>
        </Icon>

        <Icon>
          <Image src="https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117355081_323465445472355_8172838030574485770_n.jpg?_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=H7_RRAIUdzgAX_nsBbE&oh=7c2fa27a424f3439467c49fc0ff48d9f&oe=5FD3A082"></Image>
        </Icon>
        <Icon>
          <Image src="https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117355081_323465445472355_8172838030574485770_n.jpg?_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=H7_RRAIUdzgAX_nsBbE&oh=7c2fa27a424f3439467c49fc0ff48d9f&oe=5FD3A082"></Image>
        </Icon>
        <Icon>
          <Image src="https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117355081_323465445472355_8172838030574485770_n.jpg?_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=H7_RRAIUdzgAX_nsBbE&oh=7c2fa27a424f3439467c49fc0ff48d9f&oe=5FD3A082"></Image>
        </Icon>
      </IconRow>
    </MainWrapper>
  );
}

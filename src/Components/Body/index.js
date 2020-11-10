import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import Profile from './Profile';
import { Wrapper } from './components';

export default function Body() {
  return (
    <Wrapper>
      <Stories />
      <Profile />
    </Wrapper>
  );
}

import React from 'react';
import Header from './Components/Header/index';
import Body from './Components/Body/index';
import Footer from './Components/Footer/index';
import css from './index.css';
import { Wrapper } from './style';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

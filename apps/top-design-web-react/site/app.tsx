import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Sider } from './components/sider';
import { Container } from './components/container';
import { Content } from './components/content';

const prefixCls = 'top-design-site';
export const App = () => {
  console.log(555);
  console.log(666);
  return (
    <div className={prefixCls}>
      <BrowserRouter>
        <Header />
        <Container direction="horizontal">
          <Sider />
          <Content />
        </Container>
      </BrowserRouter>
    </div>
  );
};

import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Sider } from './components/sider';
import { Container } from './components/container';
import { Content } from './components/content';

const prefixCls = 'top-design-site';
console.log(1234);
export const App = () => {
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

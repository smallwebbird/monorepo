import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DemoCodePreview } from '@top-design/components';
import { routes } from '../../routes';
import './index.less';

const prefixCls = 'top-design-site-content';
export const Content = () => {
  return <div className={prefixCls}>
    <Suspense fallback={<>loading</>}>
        <Routes>
          {
            routes.map(({path, Component}) => <Route path={path} element={<Component />}/>)
          }
        </Routes>
    </Suspense>
  </div>
}

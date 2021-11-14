import { lazy } from 'react';

const prefixUrl = '/web-react/components';
export const routes = [
  {
    name: '按钮 Button',
    path: `${prefixUrl}/button`,
    Component: lazy(() => import('../../components/Button/readme.md'))
  }
]

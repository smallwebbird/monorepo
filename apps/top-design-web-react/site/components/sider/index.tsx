import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import './index.less';

const prefixCls = 'top-design-site-sider'
export const Sider = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  }
  return <div className={prefixCls}>
    {
      routes.map(item => <div className={`${prefixCls}-item`} onClick={() => handleClick(item.path)}>
        {
          item.name
        }
      </div>)
    }
  </div>
}

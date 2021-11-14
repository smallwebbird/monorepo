import React from 'react';

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
}
export const Container = ({ children, direction }: IProps) => {
  return <div style={{ display: 'flex', flex: 1, flexDirection: direction === 'horizontal' ? 'row' : 'column' }}>
    {children}
  </div>
}

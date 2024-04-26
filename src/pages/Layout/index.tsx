import React from 'react';
import './style.scss';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../component/Menu';

export const Layout: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="LogOut border border-3">
      <Menu/>
      <Outlet/>
    </div>
  );
});

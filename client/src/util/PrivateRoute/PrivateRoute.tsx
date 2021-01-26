import React, { useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../Context/Auth';
import './privateroute.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Topbar from '../../Components/Topbar/Topbar';

interface IUser {
  user: {id: string} | null;
  login: (userData: User) => void;
  logout: () => void;
}

interface User {
  username: string;
  password: string;
  token: string;
}

interface IProps {
  children: JSX.Element,
  exact?: boolean,
  path: string
}

function PrivateRoute({ children, ...rest }: IProps) {
  const { user } = useContext<IUser>(AuthContext);
  const [sidebar, setSidebar]= useState<boolean>(true);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <div>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <Topbar setSidebar={setSidebar} />
            <div
              className={
                sidebar ? 'other-elements' : 'other-elements-nosidebar'
              }
            >
              {children}
            </div>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

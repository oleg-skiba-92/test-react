// @flow
import React from 'react';

import {Link} from "react-router-dom";
import {Button} from "@material-ui/core/es/index";

type TProps = {
  isLoggedIn: boolean,

  logOut: () => void,
  logIn: () => void,
};

export default (props: TProps) => (
  <div className="header">
    <Link to={`/news`}>
      <Button variant="contained" color="primary">Home</Button>
    </Link>
    {
      props.isLoggedIn ? (
        <div>
          <Link to={`/profile`}>
            <Button variant="contained" color="primary">Profile</Button>
          </Link>
          <Button onClick={() => props.logOut()}>LogOut</Button>
        </div>
      ) : (
        <Button variant="contained" color="primary" onClick={() => props.logIn()}>LogIn</Button>
      )
    }
  </div>
);
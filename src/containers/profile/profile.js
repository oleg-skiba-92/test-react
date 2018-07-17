// @flow
import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Divider, Paper} from "@material-ui/core/es/index";

import type {TStoreState} from "../../types/state/TStoreState";
import type {TUser} from "../../types/TUser";

type TProps = {
  profile: TUser;
}
type TState = {}

class Profile extends Component<TProps, TState> {
  props: TProps;

  static mapStateToProps(state: TStoreState) {
    return {
      profile: state.user.user
    }
  };

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static initComponent() {
    return withRouter(connect(Profile.mapStateToProps, Profile.mapDispatchToProps)(Profile));
  }

  render() {
    return (
        <Paper className="profile" elevation={1}>
          <h3>
            Profile
          </h3>

          <div className="profile__row-info">
            <span className="profile__row-label">First Name:</span>
            {this.props.profile.firstName}
          </div>
          <Divider />

          <div className="profile__row-info">
            <span className="profile__row-label">Last Name:</span>
            {this.props.profile.lastName}
          </div>
          <Divider />

          <div className="profile__row-info">
            <span className="profile__row-label">UserName:</span>
            {this.props.profile.username}
          </div>
          <Divider />

          <div className="profile__row-info">
            <span className="profile__row-label">Email:</span>
            {this.props.profile.email}
          </div>
          <Divider />

        </Paper>
    )
  }
}

export default Profile.initComponent();
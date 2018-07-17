// @flow
import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button, Dialog, DialogContent, DialogTitle, TextField, DialogActions} from "@material-ui/core/es/index";

import type {TStoreState} from "../../types/state/TStoreState";
import {loginRequest} from "../../actions/auth.action";

type TProps = {
  open: boolean;
  isLoggedIn: boolean;
  history: Object;

  onClose: () => void;
  login: (loginData: Object) => void;
};
type TState = {
  username: string,
  password: string,

  username_error: string,
  password_error: string,
};

class Login extends Component<TProps, TState> {
  props: TProps;
  state: TState;

  static mapStateToProps(state: TStoreState) {
    return {
      isLoggedIn: state.user.isLoggedIn
    }
  };

  static mapDispatchToProps(dispatch) {
    return {
      login: (loginData) => dispatch(loginRequest(loginData))
    };
  }

  static initComponent() {
    return withRouter(connect(Login.mapStateToProps, Login.mapDispatchToProps)(Login));
  }

  constructor(props: TProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      username_error: '',
      password_error: '',
    };
  }

  changeForm(key: string, value: string) {
    this.setState({[key]: value, [`${key}_error`]: ''});
  }

  closeForm() {
    this.setState({
      username: '',
      password: '',
      username_error: '',
      password_error: '',
    });
    this.props.onClose();
  }

  submitForm = (event) => {
    event.preventDefault();

    let valid = true;
    let loginData = {
      username: this.state.username,
      password: this.state.password,
    };

    if (!loginData.username) {
      this.setState({username_error: 'This field is required'});
      valid = false;
    }

    if (!loginData.password) {
      this.setState({password_error: 'This field is required'});
      valid = false;
    }

    if (valid) {
      this.props.login(loginData);
    }
  };

  componentWillReceiveProps(nextProps: TProps) {
    if (nextProps.isLoggedIn && nextProps.open) {
      this.closeForm();
    }
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={() => this.closeForm()}>
        <DialogTitle id="alert-dialog-slide-title">
          Login
        </DialogTitle>

        <form onSubmit={this.submitForm} noValidate autoComplete="off">
          <DialogContent>
            <TextField
              id="username"
              label="Username"
              value={this.state.username}
              required={true}
              error={!!this.state.username_error}
              helperText={this.state.username_error}
              onChange={(e) => this.changeForm('username', e.target.value)}
              margin="normal"
              fullWidth={true}
            />

            <TextField
              id="password"
              label="Password"
              type="password"
              value={this.state.password}
              required={true}
              error={!!this.state.password_error}
              helperText={this.state.password_error}
              onChange={(e) => this.changeForm('password', e.target.value)}
              margin="normal"
              fullWidth={true}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={() => this.closeForm()} color="primary">
              Close
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary">
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

export default Login.initComponent();
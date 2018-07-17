// @flow
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Snackbar} from "@material-ui/core/es/index";

import News from "./containers/news/news";
import ViewNews from "./containers/news/viewNews";
import Profile from "./containers/profile/profile";
import Login from "./containers/login/login";
import Header from "./components/header"

import type {TStoreState} from "./types/state/TStoreState";

import {logout} from "./actions/auth.action";

type TProps = {
  isLoggedIn: boolean,
  match: Object,
  error: string,
  fetching: boolean,

  logIn: () => void,
  logOut: () => void,
}

type TState = {
  loginOpen: boolean,
  openToast: boolean,
  toastMessage: string,
}

const PrivateRoute = ({isLoggedIn, component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? (
          <Component/>
        ) : (
          <Redirect to="/news"/>
        )
      }
    />
  );
};

class App extends Component<TProps, TState> {
  props: TProps;
  state: TState;

  static mapStateToProps(state: TStoreState) {
    return {
      isLoggedIn: state.user.isLoggedIn,
      error: state.user.error || state.news.error || '',
    }
  };

  static mapDispatchToProps(dispatch) {
    return {
      logOut: () =>
        dispatch(logout()),
    };
  }

  static initComponent() {
    return withRouter(connect(App.mapStateToProps, App.mapDispatchToProps)(App));
  }

  constructor(props){
    super(props);
    this.state = {
      loginOpen: false,
      openToast: false,
      toastMessage: '',
    }
  }

  componentWillReceiveProps(nextProps: TProps) {
    if (!!nextProps.error) {
      this.openToast(nextProps.error);
    }
  }

  openLogin() {
    this.setState({loginOpen: true})
  }

  closeLogin() {
    this.setState({loginOpen: false})
  }

  openToast(error: string) {
    this.setState({
      toastMessage: error,
      openToast: true
    })
  }

  closeToast() {
    this.setState({openToast: false})
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <Header
              isLoggedIn={this.props.isLoggedIn}
              logOut={() => this.props.logOut()}
              logIn={() => this.openLogin()}
            />
          </div>
        </header>

        <main>
          <div className="container">
            <Switch>
              <Route exact path="/news" component={News}/>
              <Route path="/news/:id" component={ViewNews}/>

              <PrivateRoute
                isLoggedIn={this.props.isLoggedIn}
                path="/profile"
                component={Profile}
              />

              <Redirect to="/news" component={Profile}/>
            </Switch>
          </div>
        </main>

        <Login
          open={this.state.loginOpen}
          onClose={()=>this.closeLogin()}
        />

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.openToast}
          autoHideDuration={2000}
          onClose={() => this.closeToast()}
          message={this.state.toastMessage}
        />
      </div>
    );
  }
}

export default App.initComponent();

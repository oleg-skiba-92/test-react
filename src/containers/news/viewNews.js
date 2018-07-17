// @flow
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import type {TStoreState} from "../../types/state/TStoreState";
import type {TNews} from "../../types/TNews";

import {getNewsByIdRequest} from "../../actions/news.action";
import {Paper} from "@material-ui/core/es/index";

type TProps = {
  match: Object,
  news: TNews,

  getNewsById: (id: number) => void,
}
type TState = {}

class ViewNews extends Component<TProps, TState> {
  props: TProps;

  static mapStateToProps(state: TStoreState) {
    return {
      news: state.news.currentNews
    }
  };

  static mapDispatchToProps(dispatch) {
    return {
      getNewsById: (id: number) =>
        dispatch(getNewsByIdRequest(id)),
    };
  }

  static initComponent() {
    return withRouter(connect(ViewNews.mapStateToProps, ViewNews.mapDispatchToProps)(ViewNews));
  }

  componentDidMount() {
    this.props.getNewsById(+this.props.match.params.id)
  }

  render() {
    return this.props.news && (
      <Paper className="view-news" elevation={1}>
        <h2>{this.props.news.title}</h2>
        <div className="view-news__info">
          Created by {this.props.news.author} at {this.props.news.createdAt}
        </div>
        <div className="view-news__created">
        </div>
        <div className="view-news__description">
          {this.props.news.description}
        </div>
      </Paper>
    )
  }

}

export default ViewNews.initComponent();
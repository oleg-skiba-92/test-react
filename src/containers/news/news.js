// @flow
import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import NewsItem from "../../components/newsItem";
import NewsFilter from "../../components/newsFilter";

import type {TNews} from "../../types/TNews";
import type {TStoreState} from "../../types/state/TStoreState";
import {getNewsRequest} from "../../actions/news.action";

type TProps = {
  news: TNews[];
  history: Object;

  getNews: () => void;
}
type TState = {
  searchText: string;
  sortBy: string;
}

class News extends Component<TProps, TState> {
  props: TProps;

  static mapStateToProps(state: TStoreState) {
    return {
      news: state.news.news
    }
  };

  static mapDispatchToProps(dispatch) {
    return {
      getNews: () =>
        dispatch(getNewsRequest()),
    };
  }

  static initComponent() {
    return withRouter(connect(News.mapStateToProps, News.mapDispatchToProps)(News));
  }

  constructor(props: TProps) {
    super(props);
    this.state = {
      searchText: '',
      sortBy: 'title',
    }
  }

  componentDidMount() {
    this.props.getNews();
  }

  search(text: string) {
    this.setState({searchText: text})
  }

  setSort(sort: string) {
    this.setState({sortBy: sort})
  }

  render() {
    return (
      <div className="news">
        <NewsFilter
          searchText={this.state.searchText}
          sortBy={this.state.sortBy}

          search={(v) => this.search(v)}
          setSort={(v) => this.setSort(v)}
        />

        <div className="news__container">
        {!this.props.news.length ?
          <div className="news__not-found">Not News</div> :
          this.props.news
            .sort((a, b) => {
              if (a[this.state.sortBy] > b[this.state.sortBy]) return -1;
              if (a[this.state.sortBy] < b[this.state.sortBy]) return 1;
              return 0
            })
            .filter((item) => {
              if(!!this.state.searchText){
                return item.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
              }
              return true;
            })
            .map((item, index) => (<NewsItem key={index} news={item}/>))}
      </div>
      </div>
    )
  }
}

export default News.initComponent();
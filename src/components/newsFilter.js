// @flow
import React from 'react';
import {MenuItem, TextField} from "@material-ui/core/es/index";

type TProps = {
  searchText: string,
  sortBy: string,

  search: (val: string) => void,
  setSort: (val: string) => void,
};

export default (props: TProps) => (
  <div className="news-filter">

    <TextField
      label="Search"
      id="simple-start-adornment"
      value={props.searchText}
      onChange={(e) => props.search(e.target.value)}
    />
    <TextField
      select
      label="Sort By"
      value={props.sortBy}
      onChange={(e) => props.setSort(e.target.value)}
    >
      <MenuItem key="title" value="title">Title</MenuItem>
      <MenuItem key="like" value="like">Popularity</MenuItem>
    </TextField>
  </div>
)
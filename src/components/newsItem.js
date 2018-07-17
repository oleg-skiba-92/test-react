// @flow
import React from 'react';
import {Link} from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Button, Card, CardActions, CardContent} from "@material-ui/core/es/index";

import type {TNews} from "../types/TNews";

type TProps = {
  news: TNews
};

export default (props: TProps) => (
  <div className="news-item">
    <Card className="news-item__box" raised={true}>

      <CardContent>
        <div className="news-item__title">{props.news.title}</div>
        <div className="news-item__author">{props.news.author}</div>
      </CardContent>

      <CardActions className="news-item__actions">
        <div className="news-item__like">
          <FavoriteIcon/>
          {props.news.like}
        </div>

        <Link to={`/news/${props.news.id}`}>
          <Button size="small" variant="contained" color="primary">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  </div>
);
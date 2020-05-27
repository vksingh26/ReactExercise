import React from "react";

import "./Feeds.css";
import "../../NewsFeed/NewsFeed.css";
const Feeds = (props) => {
  return (
      <li>
        <label>{props.NewsFeed.num_comments}</label>
        <label>{props.NewsFeed.points}</label>
        <label className="cursor-pointer" onClick={() => {props.upVote(props.NewsFeed.objectID)}}>
          <span className="upvote"></span>
        </label>
        <label className="FeedComments">
          <span className="title BOLD">{props.NewsFeed.title} </span>
          <span className="url BOLD"> ({props.NewsFeed.url}) by</span>
          <span className="author BOLD"> {props.NewsFeed.author} </span>
        </label>
        <label className="cursor-pointer" onClick={() => {props.hideFeed(props.NewsFeed)}}>
          [ hide ]
        </label>
      </li>
  );
};

export default Feeds;

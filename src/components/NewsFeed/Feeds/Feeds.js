import React from "react";

import "./Feeds.css";
import "../../NewsFeed/NewsFeed.css";
const Feeds = (props) => {
  return (
    <li className="FeedContainer">
      <div className="FeedContentData">
        <div className="comments">{props.NewsFeed.num_comments}</div>
        <div className="voteCount">{props.NewsFeed.points}</div>
        <div
          className="upvote cursor-pointer"
          onClick={() => {
            props.upVote(props.NewsFeed.objectID);
          }}
        >
          <span className="upvoteIcon"></span>
        </div>
      </div>
      <div className="FeedContentDetails">
        <div className="title BOLD">{props.NewsFeed.title} </div>
        <div className="url BOLD">({props.NewsFeed.url}) by</div>
        <div className="author BOLD">{props.NewsFeed.author}</div>
        <div
          className="hide cursor-pointer BOLD"
          onClick={() => {
            props.hideFeed(props.NewsFeed);
          }}
        >
          [Hide]
        </div>
      </div>
    </li>
  );
};

export default Feeds;

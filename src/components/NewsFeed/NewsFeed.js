import React, { useState, useEffect } from "react";

import Feeds from "../../components/NewsFeed/Feeds/Feeds";
import "../NewsFeed/Feeds/Feeds.css";
import getFeeds from "../../getFeeds";
import Pagination from "../Pagination/Pagination";
import FeedGraph from "../Graph/Graph";

function NewsFeed() {
  const initialState = () => JSON.parse(sessionStorage.getItem("feeds")) || [];
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState(initialState);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    //here i set the max page count to  10;
    if (currentPage >= 0 && currentPage <= 10) {
      if (JSON.parse(sessionStorage.getItem("feeds"))) {
        setIsLoaded(true);
        setFeeds(JSON.parse(sessionStorage.getItem("feeds")));
      } else {
        getFeeds(currentPage).then(
          (result) => {
            setIsLoaded(true);
            setFeeds(result.hits);
          },
          (error) => {
            setError(error);
          }
        );
      }
    }
  }, [currentPage]);

  const upvoteHandler = (id) => {
    const index = feeds.findIndex((feed) => {
      return feed.objectID === id;
    });
    const feed = Object.assign({}, feeds[index]);
    feed.points = feed.points + 1;
    feeds[index] = feed;
    sessionStorage.clear();
    sessionStorage.setItem("feeds", JSON.stringify(feeds));
    setFeeds(JSON.parse(sessionStorage.getItem("feeds")));
  };

  const hideHandler = (obj) => {
    let objectID = obj.objectID;
    var newFeeds = feeds.filter((feed) => feed.objectID !== objectID);
    sessionStorage.clear();
    sessionStorage.setItem("feeds", JSON.stringify(newFeeds));
    setFeeds(JSON.parse(sessionStorage.getItem("feeds")));
  };

  const prevFeedHandler = () => {
    if (JSON.parse(sessionStorage.getItem("feeds"))) {
      sessionStorage.clear();
      setCurrentPage((currentPage) => currentPage - 1);
    } else {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const nextFeedHandler = () => {
    if (JSON.parse(sessionStorage.getItem("feeds"))) {
      sessionStorage.clear();
      setCurrentPage((currentPage) => currentPage + 1);
    } else {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul className="FeedUl">
          {feeds.map((feed, index) => (
            <Feeds
              key={feed.objectID}
              NewsFeed={feed}
              upVote={upvoteHandler}
              hideFeed={hideHandler}
            ></Feeds>
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          prevFeed={prevFeedHandler}
          nextFeed={nextFeedHandler}
        />
        <FeedGraph feeds={feeds} />
      </div>
    );
  }
}

export default NewsFeed;

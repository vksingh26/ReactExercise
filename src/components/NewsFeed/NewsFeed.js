import React, { useState, useEffect } from "react";

import Feeds from "../../components/NewsFeed/Feeds/Feeds";
import "../NewsFeed/Feeds/Feeds.css";
import getFeeds from "../../getFeeds";
import Pagination from "../Pagination/Pagination";
import FeedGraph from '../Graph/Graph';

const NewsFeed = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage,setCurrentPage] = useState(0);

  useEffect(() => {
    if (currentPage >= 0 && currentPage <= 10) {
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
  }, [currentPage]);

  const upvoteHandler = (id) => {
    const index = feeds.findIndex((feed) => {
      console.log(feed);
      return feed.objectID === id;
    });
    const feed = Object.assign({}, feeds[index]);
    feed.points = feed.points + 1;
    feeds[index] = feed;
    setFeeds([...feeds]);
  };

  const hideHandler = (obj) => {
    let objectID = obj.objectID;
    setFeeds(feeds.filter((feed) => feed.objectID !== objectID));
  };

  const prevFeedHandler = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const nextFeedHandler = () => {
    setCurrentPage((currentPage) => currentPage + 1);
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
        <FeedGraph feeds={feeds}/>
      </div>
    );
  }
};

export default NewsFeed;

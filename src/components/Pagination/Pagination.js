import React, { Component } from "react";

import "./Pagination.css";

class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <span className={this.props.currentPage <= 0 ? 'MARGIN_LEFT MARGIN_RIGHT isDisabled': 'cursor-pointer MARGIN_LEFT MARGIN_RIGHT'} onClick={this.props.prevFeed}>
          Previous
        </span>
        <span>|</span>
        <span className={this.props.currentPage >= 10 ? 'MARGIN_LEFT MARGIN_RIGHT isDisabled': 'cursor-pointer MARGIN_LEFT MARGIN_RIGHT'} onClick={this.props.nextFeed}>Next</span>
      </div>
    );
  }
}

export default Pagination;

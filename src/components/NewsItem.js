import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="d-flex justify-content-center">
        
        <div className="card" style={{ width: "600px", margin: "21px" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author? author : "Unknown"} on {new Date(date).toGMTString() } </small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              News in detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

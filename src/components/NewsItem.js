import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      urlToImage,
      newsUrl,
      author,
      publishedAt,
      sourceName,
    } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-warning text-bg-warning "
            style={{ left: "80%", zIndex: "1" }}
          >
            {sourceName}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5148&q=80"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toGMTString()}.
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              //   rel is for old browsers.
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

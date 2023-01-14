import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    urlToImage,
    newsUrl,
    author,
    publishedAt,
    sourceName,
  } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-warning  "
            style={{ left: "80%", zIndex: "1" }}
          >
            {sourceName}
            <span className="visually-hidden">News Source</span>
          </span>
        </div>
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
};

export default NewsItem;

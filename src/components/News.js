import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "9",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  firstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  constructor(props) {
    super(props);
    //console.log("constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    // document.title = `${this.props.category
    //   .charAt(0)
    //   .toUpperCase()}${this.props.category.slice(1)} - NewsEagle`;
    document.title = `${this.firstLetter(this.props.category)} - NewsEagle`;
  }

  async update() {
    //console.log("page = " + this.state.page);
    //this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=996d5a0e2e20479d8dc507897f86ea2b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.update();
  }

  // handlePrevClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.update();
  // };

  // handleNextClick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //   this.update();
  // };

  fetchMoreData = async () => {
    //let pageno = this.state.page;
    this.setState({ page: this.state.page });
    // this.setState((prev) => {
    //   return {
    //     page: prev.page + 1,
    //   };
    // });
    // console.log("Page no. = " + this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=996d5a0e2e20479d8dc507897f86ea2b&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      // loading: false,
    });
    // console.log(
    //   "Page no. = " +
    //     this.state.page +
    //     ", Articles length = " +
    //     this.state.articles.length +
    //     ", totalresults = " +
    //     this.state.totalResults
    // );
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          NewsEagle - Top <b>{this.props.category}</b> headlines
        </h2>

        {this.state.loading && <Spinner />}
        {/* Infinite Scroller */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className=" row ">
              {/* There are 12 grids in a row of bootsrap class container. So, below 3 coloumns will occupy 4 grids.*/}
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-3 " key={index}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      urlToImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
                      }
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                      sourceName={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

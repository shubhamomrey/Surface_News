import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
  const capitalizeFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  document.title = `${capitalizeFirstLetter(
    props.category
  )} - Surface News`;
 
  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.countary}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
   props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  
   props.setProgress(100);
  }
useEffect(() => {
  updateNews();
}, [page]);
  

  const fetchMoreData = async () => {
    setPage( page + 1 );
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.countary
    }&category=${props.category}&apiKey=${props.apikey}&page=${
     setPage(page + 1)
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  };

 
    return (
      <>
        <h1 className="d-flex justify-content-center " style={{marginTop: 60}}>Surface News</h1>
        <h3 className="mx-4">
          Top stories from {capitalizeFirstLetter(props.category)}
        </h3>

        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container ">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 200)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
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

News.defaultProps = {
  countary: "in",
  pageSize: 7,
  category: "general",
};
News.propTypes = {
  countary: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

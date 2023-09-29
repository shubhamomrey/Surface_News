import "./App.css";
import React, { Component } from "react";
import Nabvar from "./components/Nabvar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 11;
  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Nabvar />
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="general"
                countary="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="business"
                countary="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="entertainment"
                countary="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="health"
                countary="in"
                category="health"
              />
            }
          />
          <Route
            path="/sport"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="sport"
                countary="in"
                category="sport"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="science"
                countary="in"
                category="science"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pageSize={this.pageSize}
                key="technology"
                countary="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;

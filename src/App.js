import "./App.css";
import React, { Component } from "react";
import Nabvar from "./components/Nabvar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export class App extends Component {
  pageSize = 10;
  render() {
    return (
      <Router>
        <Nabvar />
        <Routes>
          
          <Route
            path="/"
            element={
              <News
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
              <News pageSize={this.pageSize} key="sport" countary="in" category="sport" />
            }
          />
          <Route
            path="/science"
            element={
              <News
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

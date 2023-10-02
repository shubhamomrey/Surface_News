import "./App.css";
import React, { useState } from "react";
import Nabvar from "./components/Nabvar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App (props) {
  const [progress, setProgress] = useState(0)
  const pageSize = 10;
  const apikey = process.env.REACT_APP_NEWS_API;

    return (
      <Router>
        <Nabvar />
        <LoadingBar color="#f11946" height={3} progress={progress} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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
                setProgress={setProgress}
                apikey={apikey}
                pageSize={pageSize}
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

export default App;


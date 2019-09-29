import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// codesplitting

const PageRouter: React.FC<any> = () => {
  return (
    <Router>
      <>
        <Switch></Switch>
      </>
    </Router>
  );
};

export default PageRouter;

import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckPage from "../CreateDeck/CreateDeckPage";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <CreateDeckPage />
        {/* TODO: Implement the screen starting here */}
        <NotFound />
      </div>
    </React.Fragment>
  );
}

export default Layout;

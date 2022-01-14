import React, { useState } from "react";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import HeaderNavs from "./HeaderNavs";

export default function MainBody() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainBody">
      <header>
        <p>Tom Haywood</p>
        {/* We are passing the currentPage from state and the function to update it */}
        <HeaderNavs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="route">{renderPage()}</div>
    </div>
  );
}

import React from "react";

function HeaderNavs({ currentPage, handlePageChange }) {
  const links = [
    {
      href: "#home",
      pageChange: "Home",
    },
    {
      href: "#about",
      pageChange: "About",
    },
    {
      href: "#portfolio",
      pageChange: "Portfolio",
    },
    {
      href: "#contact",
      pageChange: "Contact",
    },
  ];
  return (
    <ul className="header">
      {links.map((element) => {
        return (
          <li className="nav-item">
            <a
              href={element.href}
              onClick={() => handlePageChange(element.pageChange)}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === element.pageChange
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {element.pageChange}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderNavs;

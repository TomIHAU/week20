import React from "react";

function HeaderNavs({ currentPage, handlePageChange }) {
  const links = [
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
    {
      href: "#resume",
      pageChange: "Resume",
    },
  ];
  return (
    <ul className="header">
      {links.map((element, i) => {
        return (
          <li className="nav-item" key={i}>
            <a
              href={element.href}
              onClick={() => handlePageChange(element.pageChange)}
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

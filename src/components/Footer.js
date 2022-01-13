import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

function Footer() {
  const socials = [
    {
      href: "https://github.com/TomIHAU",
      img: <BsGithub />,
    },
    {
      href: "https://www.linkedin.com/in/tom-haywood-a78751228/",
      img: <BsLinkedin />,
    },
    {
      href: "",
      img: <BsStackOverflow />,
    },
  ];
  return (
    <footer>
      <div className="footerContainer">
        {socials.map((element) => {
          return (
            <a href={element.href} target="_blank" rel="noreferrer">
              {element.img}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;

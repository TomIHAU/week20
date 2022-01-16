import React from "react";

export default function Portfolio() {
  const works = [
    {
      title: "First Group Project.",
      src: "./images/screenshotFinal.png",
      alt: "Project 1 From BootCamp",
      hoverText: "Project 1 From Bootcamp",
      deployed: "https://jonmorg-hs.github.io/Project1/",
      github: "https://github.com/jonmorg-hs/Project1",
    },
    {
      title: "Second Group Project.",
      src: "./images/PsuedoShopper.png",
      alt: "Project 2 From BootCamp",
      hoverText: "Project 2 From Bootcamp",
      deployed: "https://psuedoshopper.herokuapp.com/",
      github: "https://github.com/Thomas21119/PsuedoShopper",
    },
    {
      title: "First Full Stack app",
      src: "./images/techBlogging.png",
      alt: "A Small Tech Blogging Site",
      hoverText: "Tech Blogger",
      deployed: "https://techin-n-blogin.herokuapp.com/",
      github: "https://github.com/TomIHAU/tech-blog/",
    },
    {
      title: "Weather Forecast Dashboard.",
      src: "./images/weatherdash.png",
      alt: "Five day weather forecast",
      hoverText: "Weather Forecast",
      deployed: "https://tomihau.github.io/WeatherDashboard/",
      github: "https://github.com/TomIHAU/WeatherDashboard",
    },
    {
      title: "Time management website.",
      src: "./images/timeblock.png",
      alt: "Time management website",
      hoverText: "Time management website",
      deployed: "https://tomihau.github.io/timeblock/",
      github: "https://github.com/TomIHAU/timeblock",
    },
    {
      title: "Basic Quiz website.",
      src: "./images/Quizing.png",
      alt: "Quiz website",
      hoverText: "Basic QuizSite",
      deployed: "https://tomihau.github.io/QuizWebsite/",
      github: "https://github.com/TomIHAU/QuizWebsite",
    },
  ];
  return (
    <div>
      <h1>My Work</h1>
      <section className="projectCards">
        {works.map((work, i) => {
          console.log(work.src);
          return (
            <a
              key={i}
              href={work.github}
              target="_blank"
              className="card"
              rel="noreferrer"
            >
              <img className="image" src={work.src} alt={work.alt} />

              <div className="overlay">
                <div className="hoverText">{work.hoverText}</div>
              </div>
              <figcaption>{work.title}</figcaption>
            </a>
          );
        })}
      </section>
    </div>
  );
}

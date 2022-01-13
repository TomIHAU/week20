import React from "react";

export default function Portfolio() {
  const works = [
    {
      title: "First Group Project.",
      src: "/images/screenshotFinal.png",
      alt: "Project 1 From BootCamp",
      hoverText: "Project 1 From Bootcamp",
      href: "https://jonmorg-hs.github.io/Project1/",
    },
    {
      title: "Second Group Project.",
      src: "/images/PsuedoShopper.png",
      alt: "Project 2 From BootCamp",
      hoverText: "Project 2 From Bootcamp",
      href: "https://github.com/Thomas21119/PsuedoShopper/",
    },
    {
      title: "First Full Stack app",
      src: "/images/techBlog.png",
      alt: "A Small Tech Blogging Site",
      hoverText: "Tech Blogger",
      href: "https://github.com/TomIHAU/tech-blog/",
    },
    {
      title: "Weather Forecast Dashboard.",
      src: "/images/weatherdash.png",
      alt: "Five day weather forecast",
      hoverText: "Weather Forecast",
      href: "https://tomihau.github.io/week6homework-WeatherDashboard/",
    },
    {
      title: "Time management website.",
      src: "/images/timeblock.png",
      alt: "Time management website",
      hoverText: "Time management website",
      href: "https://tomihau.github.io/week5homework---timeblock/",
    },
    {
      title: "Basic Quiz website.",
      src: "/images/QuizSite.png",
      alt: "Quiz website",
      hoverText: "Basic QuizSite",
      href: "https://tomihau.github.io/week4homework/",
    },
  ];
  return (
    <div>
      <h1>My Work</h1>
      <section class="projectCards">
        {works.map((work) => {
          return (
            <a href={work.href} target="_blank" class="card" rel="noreferrer">
              <img class="image" src={work.src} alt={work.alt} />

              <div class="overlay">
                <div class="hoverText">{work.hoverText}</div>
              </div>
              <figcaption>{work.title}</figcaption>
            </a>
          );
        })}
      </section>
    </div>
  );
}

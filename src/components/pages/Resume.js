import React from "react";

export default function Resume() {
  return (
    <div>
      <p>
        Download my{" "}
        <a
          class="resumeLink"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/15r4hjuRoujY32ugh5j1RGBmvwY_hHMT2h0ddh4HXKUc/view?usp=sharing"
          download
        >
          Resume
        </a>
      </p>
      <p>
        Just finished a full stack web development course with Monash, I have
        practical experience with Node.js, Express.js, React.js, RESTful APIs. I
        have also used the databases and their respective ORM's SQL (and
        sequelize), mongo (and mongoose) I have worked in a team using MVC
        design pattern using agile practices to deliver projects. I have been
        using github for all my work.
      </p>
      <ul>
        <h4>Front End proficiencies:</h4>
        <li>React.js</li>
        <li>CSS</li>
        <li>Responsive design</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
      </ul>
      <ul>
        <h4>Back End proficiencies:</h4>
        <li>React.js</li>
        <li>SQl, Sequelize</li>
        <li>Mongo, Mongoose</li>
        <li>Express.js</li>
        <li>API's</li>
        <li>Chart.js</li>
      </ul>
    </div>
  );
}

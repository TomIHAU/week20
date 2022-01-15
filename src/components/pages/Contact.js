import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form id="contactForm">
        <label for="nameInput">Name:</label>
        <input id="nameInput" type="text" name="name"></input>
        <label for="emailInput">Email Address:</label>
        <input id="emailInput" type="email" name="email"></input>
        <label for="messageInput">Message:</label>
        <textarea id="messageInput" type="textarea"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

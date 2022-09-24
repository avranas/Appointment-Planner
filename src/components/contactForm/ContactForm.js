import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}></input>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" onChange={e => setPhone(e.target.value)} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"></input>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

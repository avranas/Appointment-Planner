import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    const name = e.target.value;
    const contactToSet = contacts.find( i => i.name === name )
    setContact(contactToSet);
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" onChange={e => setTitle(e.target.value)}></input>
      <label for="date">Date:</label>
      <input type="text" id="date" name="date" min={getTodayString()} onChange={e => setDate(e.target.value)}></input>
      <label for="time">Time:</label>
      <input type="text" id="time" name="time" onChange={e => setTime(e.target.value)}></input>
      <ContactPicker
        required
        contacts={contacts}
        handleChange={handleChange}
      />
      <input type="submit" value="Submit"></input>
    </form>
    
  );
};

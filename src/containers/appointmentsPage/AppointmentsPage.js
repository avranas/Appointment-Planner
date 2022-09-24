import { React, useState, Link } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const newAppointment = {
      title: title,
      date: date,
      time: time,
      contact: contact
    }
    //Add a new appointment on form submission

    props.addToAppointments(newAppointment);
    //Clear the form
    setTitle('');
    setContact({});
    setDate('');
    setTime('');
    e.target.reset();
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm
            contacts={props.contacts}
            title={title}
            contact={contact}
            date={date}
            time={time}
            setTitle={setTitle}
            setContact={setContact}
            setDate={setDate}
            setTime={setTime}
            handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          data={props.appointments}
        />
      </section>
    </div>
  );
};

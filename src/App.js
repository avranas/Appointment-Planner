import {React, useState} from "react";
import { Switch, Route, Redirect, NavLink, Router } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { AppointmentForm } from "./components/appointmentForm/AppointmentForm";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    APPOINTMENT_FORM: "/appointment-form",
    TILE_LIST: "/tile-list",
    TILE: "/tile",
    CONTACT_FORM: "/contact-form"
    //Another tile list? Or is one good?
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addToContacts = ({name, phone, email}) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts([...contacts, newContact]);
  }

  const addToAppointments = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              contacts={contacts}
              addToContacts={addToContacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addToAppointments={addToAppointments}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENT_FORM}>
            <AppointmentForm
              appointments={appointments}
              addToAppointments={addToAppointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

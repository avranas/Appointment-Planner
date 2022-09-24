import { React, useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 
  const contacts = props.contacts;
  const addToContacts = props.addToContacts;
  const [ currentName, setCurrentName ] = useState('');
  const [ currentPhone, setCurrentPhone ] = useState('');
  const [ currentEmail, setCurrentEmail ] = useState('');
  const [ duplicateCheck, setDuplicateCheck ] = useState(false);

  //This gets called everytime the user types into the form
  useEffect(() => {
    if(duplicateNameFound()){
      setDuplicateCheck(true);
    } else {
      setDuplicateCheck(false);
    }
  });

  //Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
  //Returns true if a duplicate name was found
  const duplicateNameFound = () => {
    const foundName = contacts.find(i => 
      i.name === currentName
    );
    if (foundName === undefined) {
      return false;
    } else
      return true;
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicateCheck){
     const newContact = {
       name: currentName,
       phone: currentPhone,
       email: currentEmail
     }
    addToContacts(newContact);
    setCurrentName('');
    setCurrentPhone('');
    setCurrentEmail('');
    e.target.reset();
   }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        
        <ContactForm
          name={currentName}
          setName={setCurrentName}
          phone={setCurrentPhone}
          setPhone={setCurrentPhone}
          email={currentEmail}
          setEmail={setCurrentEmail}

          //local state variables
          //local state variable setter functions
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          data={contacts}
        />
      </section>
    </div>
  );
};

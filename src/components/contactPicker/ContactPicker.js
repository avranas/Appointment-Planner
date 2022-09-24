import React from "react";
import {Tile} from '../tile/Tile'

export const ContactPicker = (props) => {
  return (
    <select name="contact" onChange={props.handleChange}>
      <option selected="selected">
        --Select a contact--
      </option>
      {
        props.contacts.map( (contact) => {
          return (
            <option>
              {
                contact.name
              }
            </option>
          )
        })
      }
    </select>
  );
};

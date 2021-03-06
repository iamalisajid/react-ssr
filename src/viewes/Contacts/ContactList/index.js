import React from 'react';
import { array, func } from 'prop-types';
import ContactItem from '../ContactItem';
import { ListGroup } from '../../../globalStyles';
import { GridCloumn } from '../styles';

const ContactList = ({ contacts, onDeletion, handleUpdate }) => (
  <GridCloumn span={4}>
    <h2>Contacts</h2>
    <ListGroup>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeletion={onDeletion}
          handleUpdate={handleUpdate}
        />
      ))}
    </ListGroup>
  </GridCloumn>
);

ContactList.propTypes = {
  contacts: array.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired,
};
export default ContactList;

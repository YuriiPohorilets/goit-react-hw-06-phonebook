import PropTypes from 'prop-types';
import { Btn, Contacts, ContactsItem, Name, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts);

  return (
    <>
      <Contacts>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

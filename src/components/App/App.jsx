import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Container } from 'components/App/App.styled';
import { Notification } from 'components/Notification';
import { storage } from 'service/storage';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return storage.load(LS_KEY) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save(LS_KEY, contacts);
  }, [contacts]);

  const addContact = contact => {
    if (checkDublicate(contact)) {
      toast.error(
        `${contact.name} is already in contacts. Please add a new contact.`
      );
      return;
    }
    setContacts(prevContacts => {
      const newContacts = {
        id: nanoid(),
        ...contact,
      };
      return [newContacts, ...prevContacts];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      const newContacts = prevContacts.filter(contact => contact.id !== id);
      return newContacts;
    });
  };

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter);
      return result;
    });
    return visibleContacts;
  };

  const changeFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const checkDublicate = ({ name, number }) => {
    const result = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    return result;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Title title={'Phonebook'} />
      <ContactForm addContact={addContact} />
      <Section title={'Contacts'}>
        <Filter value={filter} changeFilter={changeFilter} />
        {visibleContacts.length !== 0 ? (
          <ContactList
            visibleContacts={visibleContacts}
            deleteContact={deleteContact}
          />
        ) : (
          <Notification message="You don't have contacts yet..." />
        )}
      </Section>
      <ToastContainer autoClose={5000} />
    </Container>
  );
};

// Test deploy

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Subtitle, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

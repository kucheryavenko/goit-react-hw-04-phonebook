import PropTypes from 'prop-types';
import {
  List,
  Item,
  Description,
  Button,
} from 'components/ContactList/ContactList.styled';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Description>
            {name}: <span>{number}</span>
          </Description>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

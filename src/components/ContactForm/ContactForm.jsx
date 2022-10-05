import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Form,
  Label,
  InputName,
  InputNumber,
  Button,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name, number });
    this.reset();
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange, nameId, numberId } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}>Name</Label>
        <InputName
          id={nameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Homer Simpson"
          required
          onChange={handleChange}
        />
        <Label htmlFor={numberId}>Number</Label>
        <InputNumber
          id={numberId}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="742-98-74"
          required
          onChange={handleChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

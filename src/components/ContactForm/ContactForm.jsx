import { Formik } from 'formik';
import * as Yup from 'yup';
import { customAlphabet } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Label, Wrapper, ErrorMsg, Btn } from './ContactForm.styled';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    onSubmit(newContact);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Container>
          <Wrapper>
            <Label htmlFor="name">Name:</Label>
            <Input name="name" type="text" id="name" />
            <ErrorMsg name="name" component="div" />
          </Wrapper>

          <Wrapper>
            <Label htmlFor="number">Number:</Label>
            <Input name="number" type="tel" id="number" />
            <ErrorMsg name="number" component="div" />
          </Wrapper>

          <Btn type="submit">Add contact</Btn>
        </Container>
      </Formik>
    </>
  );
};

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

import { Formik } from 'formik';
import {
  FormAddContact,
  FormField,
  ErrorMsgForm,
  AddBtn,
  FormLabel,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';


const ContactFormCard = Yup.object().shape({
  name: Yup.string()
    .min(2, 'This name too Short!')
    .max(40, 'Choose shorter name')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(9, 'Phone number must contain at least 9 symbols!')
    .max(13, 'Phone number must contain less than 13 symbols!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactFormCard}
      onSubmit={(values, actions) => {
        const isContactInList = contacts.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );

        if (isContactInList) {
          alert(`${values.name} is already in contacts.`);
          return;
        }

        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <FormAddContact>
        <FormLabel>
          Name
          <FormField name="name" type="text" />
          <ErrorMsgForm component="div" name="name" />
        </FormLabel>

        <FormLabel>
          Number
          <FormField name="number" type="tel" />
          <ErrorMsgForm component="div" name="number" />
        </FormLabel>
        <AddBtn type="submit">Add contact</AddBtn>
      </FormAddContact>
    </Formik>
  );
};

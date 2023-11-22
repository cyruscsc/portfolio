import { FormEvent, useState } from 'react';
import { ContactForm } from '../../../types/sanity';
import { client } from '../../../utils/sanity';
import { motion } from 'framer-motion';
import { GoCircle, GoCheckCircle } from 'react-icons/go';
import './Contact.scss';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  } as ContactForm);

  const validate = {
    name: (name: string) => name.length > 2,
    email: (email: string) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email),
    message: (message: string) => message.length > 20,
  };

  const isValid = () =>
    validate.name(formData.name) &&
    validate.email(formData.email) &&
    validate.message(formData.message);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const contactData = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    client
      .create(contactData)
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id='contact' className='app__container app__contact'>
      <h2 className='subtitle-text'>Get in Touch with Me</h2>
      <motion.form
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type='text'
            placeholder='Your name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <small
            className={validate.name(formData.name) ? 'checked' : 'unchecked'}
          >
            {validate.name(formData.name) ? <GoCheckCircle /> : <GoCircle />}
            <span>At least 2 characters</span>
          </small>
        </div>
        <div>
          <input
            type='text'
            placeholder='Your email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <small
            className={validate.email(formData.email) ? 'checked' : 'unchecked'}
          >
            {validate.email(formData.email) ? <GoCheckCircle /> : <GoCircle />}
            <span>Valid email address</span>
          </small>
        </div>
        <div>
          <textarea
            placeholder='Your message'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <small
            className={
              validate.message(formData.message) ? 'checked' : 'unchecked'
            }
          >
            {validate.message(formData.message) ? (
              <GoCheckCircle />
            ) : (
              <GoCircle />
            )}
            <span>At least 20 characters</span>
          </small>
        </div>
        <button type='submit' disabled={!isValid()}>
          {loading ? 'Sending...' : success ? 'Sent!' : 'Send'}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;

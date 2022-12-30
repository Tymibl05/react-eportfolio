import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactModal.scss';

export const ContactModal = ({ setModal }) => {
  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => alert('Message Sent Successfully!'),
        (err) => console.log(err.text)
      );
    setModal(false);
  };
  return (
    <div className="modal">
      <div id="ContactModal">
        <h1>Send a Message!</h1>
        <form action="" ref={form} onSubmit={submitHandler}>
          <input required type="text" name="name" placeholder="Name" />
          <input required type="email" name="email_from" placeholder="Email" />
          <textarea
            name="message"
            placeholder="Message..."
            cols="30"
            rows="10"
          />
          <div className="actions">
            <button className="cancel" onClick={() => setModal(false)}>
              Cancel
            </button>
            <button required type="submit" className="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import '../styles/contactModal.scss';

export const ContactModal = ({ setModal }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal">
      <div id="ContactModal">
        <h1>Send a Message!</h1>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={changeHandler}
          />
          <textarea
            name="message"
            placeholder="Message..."
            cols="30"
            rows="10"
            value={form.message}
            onChange={changeHandler}
          />
          <div className="actions">
            <button className="cancel" onClick={() => setModal(false)}>
              Cancel
            </button>
            <button type="submit" className="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

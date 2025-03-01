import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Pontus",
        from_email: form.email,
        to_email: "pontus.andersson1998@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent succesfully!', type: 'success'})
      setForm({name: "", email: "", message: ""});

    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/>}

      <div className='relative z-10 flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='font-semibold'>
            Name
            <input 
              type="text" 
              name='name' 
              className='input' 
              placeholder='John Doe' 
              required 
              value={form.name} 
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='font-semibold'>
            Email
            <input 
              type="email" 
              name='email' 
              className='input' 
              placeholder='john@gmail.com' 
              required 
              value={form.email} 
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='font-semibold'>
            Message
            <textarea 
              name='message'
              rows={4} 
              className='textarea' 
              placeholder='Let me know how I can help you!' 
              required 
              value={form.message}             
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button 
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
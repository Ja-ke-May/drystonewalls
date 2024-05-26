import React, { useState } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Clear error message when user starts typing
  };

  const validateInput = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/; // Adjust the phone pattern as needed
    return emailPattern.test(input) || phonePattern.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInput(formData.emailOrPhone)) {
      setError('Please enter a valid email or phone number.');
      return;
    }

    emailjs.send('service_ci92ksc', 'template_e09kom7', formData, 'kk0sjrsHof4O2K32j')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', emailOrPhone: '', message: '' }); // Reset the form after successful submission
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="relative mt-20 min-w-[60%] max-w-[100%]">
      <div id="ContactContent" className="p-6 mt-40 bg-black bg-opacity-80 rounded text-center text-white">
        <h2 className='underline hover:text-green-600 font-bold text-2xl mb-4'>
          <Link href="/contact" passHref>Contact</Link>
        </h2>

        <a href="mailto:jacob-may@outlook.com" className="hover:text-green-600 text-xl block m-2" title='email'>
          Jacob-May@outlook.com
        </a>
        <a href="tel:07780685832" className="hover:text-green-600 text-xl block m-2" title='phone'>
          07780685832
        </a>

        <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>

        <p className='text-lg'>Or send me a message here:</p>

        <form onSubmit={handleSubmit} className="mt-4 text-black">
          <div className="mb-4">
            <label className="block text-white text-lg mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg mb-2" htmlFor="emailOrPhone">Email or Phone</label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-full p-2 rounded"
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="menu-background border-2 border-green-900/0 hover:border-green-600 text-white font-bold text-xl py-2 px-4 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;

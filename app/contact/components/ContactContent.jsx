import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    const phonePattern = /^(?:0|\+44)\d{10}$/; // Allows '0' or '+44' followed by 10 digits for UK numbers
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
        setSuccess(true); 
        setFormData({ name: '', emailOrPhone: '', message: '' }); 
        setSubmitError(''); 
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitError('Failed to send the message. Please try again.');
      });
  };

  const handleCloseSuccess = () => {
    setSuccess(false); 
  };

  const handleCloseError = () => {
    setSubmitError(''); 
  };

  const [rotate, setRotate] = useState(false);

  const handleHammerClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000); 
  };

  return (
    <div className="relative mt-10 min-w-[70%] max-w-[100%]">
      <div id="ContactContent" className="p-6 mt-40 bg-black bg-opacity-80 text-center text-white">

        <a href="mailto:jacob-may@outlook.com" className="hover:text-green-600 text-xl block m-2" title='email'>
          Jacob-May@outlook.com
        </a>
        <a href="tel:07780685832" className="hover:text-green-600 text-xl block m-2" title='phone'>
          07780685832
        </a>

        <div className='w-[100%] menu-background h-2 mt-5 mb-5'></div>

        <p className='text-lg'>Or send me a message here:</p>

        {success && (
          <div className="relative p-4 mb-4 text-green-700 bg-green-200">
            <button onClick={handleCloseSuccess} className="absolute top-0 right-0 p-2 text-green-700">
              &#x2715;
            </button>
            Message sent successfully!
          </div>
        )}

        {submitError && (
          <div className="relative p-4 mb-4 text-red-700 bg-red-200">
            <button onClick={handleCloseError} className="absolute top-0 right-0 p-2 text-red-700">
              &#x2715;
            </button>
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 text-black">
          <div className="mb-4">
            <label className="block text-white text-lg mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2"
              maxLength="50"
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
              className="w-full p-2"
              maxLength="100"
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
              className="w-full p-2"
              rows="4"
              maxLength="500"
              required
            />
          </div>
          <button 
          type="submit" 
          className="menu-background border-2 border-green-900/0 hover:border-green-600 text-white font-bold text-xl py-2 px-4"
          onClick={handleHammerClick}
          >
            Send
          </button>
        </form>
        
      </div>
      <div className='flex w-full items-center justify-center'>
          <img
          src='/images/hammer-no-background.png'
          className={`mt-40 max-h-40 max-w-40 ${rotate ? 'rotate-animation' : ''}`} 
          alt='walling hammer'
          onClick={handleHammerClick}
          />
          </div>
    </div>
  );
};

export default ContactContent;

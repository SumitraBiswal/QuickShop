import React from 'react';

import style from './Contact.module.css'
import Navbar from '../../Component/Navbar';

export default function Contact({ quantities }) {
  const [result, setResult] = React.useState("");
  const totalCartCount = Object.values(quantities || {}).reduce((a, b) => a + b, 0);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","894f5d70-413c-4be9-98f6-ebd9cc5392a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar totalCartCount={totalCartCount} />
      <div className={style.contactWrapper}>
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit} className={style.contactForm}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />

          <label htmlFor="message">Write Your Message</label>
          <textarea id="message" name="message" rows={6} placeholder="Enter your message" required></textarea>

          <button type="submit" className={style.submitBtn}>
            Submit Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.arrowIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        {result && <p className={style.resultMessage}>{result}</p>}
      </div>
      
    </>
  );
}
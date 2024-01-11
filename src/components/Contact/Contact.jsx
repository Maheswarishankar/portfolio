import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const notifySuccess = () => toast.success('Message Sent Successfully', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notifyError = () => toast.error('Message Not Sent', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bw17s83', 'template_x9mfqx3', form.current, 'piNRg0WAjLEir-YZe')
      .then((result) => {
        console.log(result.text);
        notifySuccess();
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        notifyError();
      });
  };





  return (
    <div className=" container contact-page">
    <h1 className="home-content">
      Contact Me
    </h1>
    <div className="contact_options">
          <article className="contact_option">
            <img className="email_icon" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNlMGUwZTAiIGQ9Ik01LjUsNDAuNWgzN2MxLjkzMywwLDMuNS0xLjU2NywzLjUtMy41VjExYzAtMS45MzMtMS41NjctMy41LTMuNS0zLjVoLTM3QzMuNTY3LDcuNSwyLDkuMDY3LDIsMTF2MjZDMiwzOC45MzMsMy41NjcsNDAuNSw1LjUsNDAuNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMjYsNDAuNWgxNi41YzEuOTMzLDAsMy41LTEuNTY3LDMuNS0zLjVWMTFjMC0xLjkzMy0xLjU2Ny0zLjUtMy41LTMuNWgtMzdDMy41NjcsNy41LDIsOS4wNjcsMiwxMUwyNiw0MC41eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNlZWUiIGQ9Ik02Ljc0NSw0MC41SDQyLjVjMS45MzMsMCwzLjUtMS41NjcsMy41LTMuNVYxMS41TDYuNzQ1LDQwLjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2UwZTBlMCIgZD0iTTI1Ljc0NSw0MC41SDQyLjVjMS45MzMsMCwzLjUtMS41NjcsMy41LTMuNVYxMS41TDE4Ljc3MSwzMS42MTZMMjUuNzQ1LDQwLjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2NhMzczNyIgZD0iTTQyLjUsOS41aC0zN0MzLjU2Nyw5LjUsMiw5LjA2NywyLDExdjI2YzAsMS45MzMsMS41NjcsMy41LDMuNSwzLjVIN1YxMmgzNHYyOC41aDEuNWMxLjkzMywwLDMuNS0xLjU2NywzLjUtMy41VjExQzQ2LDkuMDY3LDQ0LjQzMyw5LjUsNDIuNSw5LjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2Y1ZjVmNSIgZD0iTTQyLjUsNy41SDI0SDUuNUMzLjU2Nyw3LjUsMiw5LjAzNiwyLDExYzAsMS4yMDYsMS41MTgsMi4yNTgsMS41MTgsMi4yNThMMjQsMjcuNzU2bDIwLjQ4Mi0xNC40OTdjMCwwLDEuNTE4LTEuMDUzLDEuNTE4LTIuMjU4QzQ2LDkuMDM2LDQ0LjQzMyw3LjUsNDIuNSw3LjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2U4NGY0YiIgZD0iTTQzLjI0Niw3LjU4MkwyNCwyMUw0Ljc1NCw3LjU4MkMzLjE4LDcuOTE5LDIsOS4yOTcsMiwxMWMwLDEuMjA2LDEuNTE4LDIuMjU4LDEuNTE4LDIuMjU4TDI0LDI3Ljc1NmwyMC40ODItMTQuNDk3YzAsMCwxLjUxOC0xLjA1MywxLjUxOC0yLjI1OEM0Niw5LjI5Nyw0NC44Miw3LjkxOSw0My4yNDYsNy41ODJ6Ij48L3BhdGg+Cjwvc3ZnPg==" />
            <h4>Email</h4>
            <h5>mahi.nawins@gmail.com</h5>
            <a href="mailto:mahi.nawins@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>

                    <div/>
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" placeholder='Your Name'required />
        <label>Email</label>
        <input type="email" name="from_email"placeholder='Your Email' required />
        <label>Message</label>
        <textarea name="message" placeholder='Your Message'required />
        <input type="submit" value="Send" className="submit-btn" />
        <ToastContainer/>
  
      </form>
    </div>
    <br />
    <div className="footer-contact"><br />
      <p>&#169; Maheshwari. All right reserved</p>
    </div>
  </div>
  </div>

  
  


  )
}

export default Contact
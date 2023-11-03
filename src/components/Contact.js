import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Feel Free To Contact Me</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.471992816056!2d77.22995365517505!3d28.498573969545344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a793af62e3%3A0xb2d8edb148db0712!2sSangam%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699033398534!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.headingContact}>Contact Form</div>
      <div className={styles.container}>
        <form action="https://formspree.io/f/mknlerdq" method="POST">
              
          {/* <div className={styles.containerInput}> */}
          <div className={styles.marginleft}>
            <input
              className={styles.containerInput}
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              className={styles.containerInput}
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            
            <textarea name="message" cols="30" rows="6"   className={styles.containerInput} placeholder="Message" ></textarea>
            <button className={styles.bttn} type="submit">
              Send
            </button>
            </div>
           
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;

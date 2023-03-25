import {React, useState} from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [showReponse, setShowResponse] = useState(false)

  const handleSubmit = () => {
    setShowResponse(true)
  }

  const renderSubmitResponse = () => {
    return (
      <div>
        <h1>just dm me on twitter bruh...</h1>
      </div>
    )
  }
  return (
    <div className={styles.contactForm}>
      <h2>Find me:</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name">Twitter:</label>
          <input className={styles.input} type="text" id="name" name="name" placeholder='BitsOrBytes' disabled />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">Github:</label>
          <input className={styles.input} type="email" id="email" name="email" placeholder='BitsOrBytesDev17' disabled />
        </div>
        <div className={styles.inputGroup}>
          <a className={styles.submitBtn}  href="">Follow Me</a>
        </div>
      </form>
      {showReponse ? renderSubmitResponse : ''}
    </div>
  );
};

export default ContactForm;

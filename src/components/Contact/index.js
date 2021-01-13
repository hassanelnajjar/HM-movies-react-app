import PropTypes from 'prop-types';
import "./style.css";

function Contact(props) {
  const {
    history: { push },
  } = props;

  const handleSubmit = () => {
    push("/movies");
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-header">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter Your name..." />
        </div>
        <div className="input-row">
          <label htmlFor="Email">Email</label>
          <input type="email" id="email" placeholder="Enter Your email..." />
        </div>
        <div className="input-row">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="5"
            placeholder="Please Type here you message :) .."
          />
        </div>
        <input className="submit-contact-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

Contact.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

export default Contact;

import React from "react";
const Contact = () => {
  return (
    <div id="contact">
      <h3>Contact Us!</h3>
      <form>
        <input type="text" id="userName" name="userName" placeholder="Name" />
        <input type="text" id="email" name="email" placeholder="Email" required />
        <input type="text" id="message" name="message" placeholder="Message" required />
        <input type="submit" value="Submit" />
      </form>
      <h5>Or Call</h5>
      <h5>(623)474-5069</h5>
      <h5 className="location">Location</h5>
      <h5>24710 W Dove Trail, Buckeye, AZ 85326</h5>
    </div>
  );
};

export default Contact;

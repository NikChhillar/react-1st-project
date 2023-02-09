import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Kartik</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Name..." />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Email..." />
          </div>
          <div>
            <label>Msg</label>
            <input
              type="text"
              required
              placeholder="Anything you have to say..."
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;

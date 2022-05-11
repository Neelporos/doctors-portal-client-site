import React from "react";
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <div className="my-10" style={{backgroundImage: `url(${appointment})`}}>
      <div className=" py-10">
        <h4 className="text-center text-primary font-bold">Contact Us</h4>
        <h2 className="text-center text-white mt-2 text-3xl">Stay connected with us</h2>
        <div className="grid place-items-center">
          <input
            type="text"
            placeholder="Email Address"
            class="input input-bordered input-primary mt-2 w-full max-w-xs"
          />
          
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered input-primary mt-2 w-full max-w-xs"
          />
         
          <textarea
            class="textarea textarea-primary mt-2 w-full max-w-xs"
            placeholder="Your message"
          ></textarea>
          <button className="btn btn-secondary mt-2 justify-self-center uppercase text-white bg-gradient-to-r from-secondary to-primary font-bold">
          Submit
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;

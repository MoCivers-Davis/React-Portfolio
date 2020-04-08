import React from "react";
import Form from "./form"
import "./contact.css";


// Contact component has a header and the form component
function Contact() {
  return (  
    <div>

      <div className="row bg-img blue-border-top">
        <div className="col-10 offset-1 text-left">
        
          <h2 className="text-center m-3">Please feel free to reach out!</h2>
    
        </div>
      </div>

      <div className="row bg-img">
        <div className="col-5 offset-4">

          <Form />

        </div>
      </div>
    </div>

  );
}
export default Contact;
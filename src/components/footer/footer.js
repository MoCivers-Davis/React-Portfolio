import React from "react";
import "./footer.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Footer() {
  return (
    <footer>
      <div className="row">
        <h6 className="col-12 text-center text-dark bg-blue p-3 m-0">
      Enjoy my page!
    </h6>
    </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import "./home.css";

// component for contact form on contact page
export default class extends React.Component {
  constructor(props) {
	super(props);
	// defaults for the page
	this.state = { message: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  // change values entered on page in state
  handleChange (event) {
	let value = event.target.value;
	let name = event.target.name;

    this.setState({[name]: value})
  }

  // check for valid email address format
  
  validateEmail (email) {
  	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }

  // Error checking, and send email
  handleSubmit (event) {
	event.preventDefault();
	// emailjs template id for email being sent
	const templateId = 'template_ge54Jsqk';

	// Make sure a message was entered
	if ((this.state.message.length === 0) || (this.state.message === "Please enter a message.")) {
		alert('Email not sent.  Please enter a message. Thank you.');
		this.setState ({
			message: "Please enter a message."
		})
	// Make sure a name was entered
	} else if ((this.state.name.length === 0) || (this.state.name === "Please enter a name.")) {
		alert('Email not sent.  Please enter a name. Thank you.');
		this.setState ({
			name: "Please enter a name."
		})
	// Make sure the email address entered is a valid email format
	} else if (!this.validateEmail(this.state.email)) {
		alert('Email not sent.  Please enter a valid email address. Thank you.');
		this.setState({
			email: "Please enter a valid email address."
		})
	// Sent the email to Mo, and alert user that the email was sent.
	} else {
		this.sendMessage(templateId, {
			message_html: this.state.message, 
			from_name: this.state.name, 
			reply_to: this.state.email,
			to_name: "Mo Civers-Davis"
		});
	};
  }
	

  // sends email via emailjs to Mo
  sendMessage (templateId, variables) {

	window.emailjs.send('gmail', templateId, variables)
  	.then(res => {
    	alert('Email successfully sent! ' + res.status + ": " + res.text);
  	})
  	// Handle errors 
  	.catch(err => {
		  alert('Here some thoughts on the error that occured:', err)
	});
  }


  render() {
	return (
		<form id="contact-form">
		{/* form component */}
		{/* Input filed for the name */}
			<div className="form-group row">
				<label htmlFor="name" className="col-form-label">Name:</label>
				<div>
					<input 
						type="text" 
						id="name" 
						className="form-control" 
						name="name" 
						value={this.state.name}
						onChange={this.handleChange}
						placeholder="your name" 
						required="required"
					></input>
				</div>
			</div>

		{/* Input filed for the email address */}
			<div className="form-group row">
				<label htmlFor="email" className="col-form-label">Email:</label>
				<div>
					<input 
						type="email" 
						id="email" 
						className="form-control" 
						name="email" 
						value={this.state.email}
						onChange={this.handleChange}
						placeholder="example@gmail.com" 
						required="required"
					></input>
				</div>
			</div>

		{/* Input filed for the message */}
			<div className="form-group row">
				<label htmlFor="message" className="col-form-label">Message:</label>
				<div>
					<textarea 
						id="message" 
						className="form-control" 
						name="message" 
						value={this.state.message}
						onChange={this.handleChange}
						rows="3" 
						required="required"
						></textarea>
				</div>
			</div>

		{/* The submit button to send the email (after error checking) */}
			<div className="form-group row">
				<label htmlFor="submit" className="col-form-label"></label>
				<div>
					<button 
						id="submit" 
						type="submit" 
						className="btn btn-primary form-control my-2" 
						onClick={this.handleSubmit}
					>Send</button>
				</div>
			</div>

		</form>
	)
  }


}
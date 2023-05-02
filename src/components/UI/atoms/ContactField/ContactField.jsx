import React, { useState } from "react";
import {
  StyledWrapperDiv,
  StyledForm,
  StyledFlexDiv,
  StyledContactDiv,
  StyledButton,
  StyledMapImage,
  StyledBackgroundDiv,
  StyledBackgroundImage,
} from "./ContactField.styled";
import map from "../../../../assets/contactField-mapimage.png";
import backgroundImage from "../../../../assets/contactField-image.png";

export default function ContactField() {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formIsCorrect, setFormIsCorrect] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 0 && message.length > 0 && email.includes("@")) {
      setName("");
      setEmail("");
      setMessage("");
      setSelectedOption("");
      setFormIsCorrect(true);
      setFormIsSubmitted(true);
    } else {
      setFormIsCorrect(false);
      setFormIsSubmitted(true);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyledBackgroundDiv>
      <StyledWrapperDiv>
        <h2>Get in touch with our experts</h2>
        <StyledFlexDiv>
          <StyledForm onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              value={email}
              type="text"
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <select
              id="inputOption"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled selected>
                Select service type
              </option>
              <option value="Auto Diagnostics">Auto Diagnostics</option>
              <option value="Engin Repair">Engin Repair</option>
              <option value="Body Work">Body Work</option>
              <option value="Batteries">Batteries</option>
              <option value="Car wash">Car wash</option>
              <option value="AC Repair">AC Repair</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <StyledButton type="submit">Send Message</StyledButton>
            {formIsSubmitted && formIsCorrect && (
              <p style={{ color: "green" }}>
                Thank you for your message! We will contact you in 3-5 business
                days.
              </p>
            )}
            {formIsSubmitted && !formIsCorrect && (
              <p style={{ color: "red" }}>
                One or all of the fields are incorrect. Please check the form
                above.
              </p>
            )}
          </StyledForm>
          <StyledContactDiv>
            <p>Address</p>
            <h6>NH 234 Public Square San Francisco 65368</h6>
            <p>Contact Details</p>
            <h6>
              1800 265 24 52 <br />
              Finsweet@gmail.com
            </h6>
            <p>Opening Hours</p>
            <h6>Monday to Friday 9:00 AM to 10:00 AM</h6>
          </StyledContactDiv>
        </StyledFlexDiv>
        <StyledMapImage src={map} />
      </StyledWrapperDiv>
      <StyledBackgroundImage src={backgroundImage} />
    </StyledBackgroundDiv>
  );
}

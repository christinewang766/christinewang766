import React, { useState, useCallback } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import { useNavigate } from 'react-router-dom'
import { Container, BackButton, FormWrap, BottomWrap, FormContent, Form, FormH1, BothNameWrap, NameWrap, LabelWrap, FormLabel, RequiredAster, NameInput, Input, MessageInput, FormButton } from './MessageElements'
import ReCAPTCHA from "react-google-recaptcha";


const Message = () => {
  let navigate = useNavigate();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    if(!disableSubmit){
      return !(fname.length & lname.length & email.length & message.length);
    } else {
      return true;
    }
    // return FALSE: disableSubmit is false and req fields  are filled
  };

  const [disableSubmit,setDisableSubmit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setFName('');
    setLName('');
    setEmail('');
    setMessage('');
    window.grecaptcha.reset();
  }


  return (
    <>
      <ScrollToTop />
      <Container>
        <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Contact &nbsp;Christine!</FormH1>

              <BothNameWrap>
                <NameWrap>
                  <LabelWrap>
                    <FormLabel for="firstName">First Name</FormLabel>
                    <RequiredAster>&nbsp;*</RequiredAster>
                  </LabelWrap>
                  <NameInput type="text" id="firstName" name="firstName" placeholder="Your first name.." value={fname} onChange={(e) => setFName(e.target.value)} required>
                  </NameInput>
                </NameWrap>

                <NameWrap>
                  <LabelWrap>
                    <FormLabel for="lastName">Last Name</FormLabel>
                    <RequiredAster>&nbsp;*</RequiredAster>
                  </LabelWrap>
                  <NameInput type="text" id="lastName" name="lastName" placeholder="Your last name.." value={lname} onChange={(e) => setLName(e.target.value)} required>
                  </NameInput>
                </NameWrap>
              </BothNameWrap>

              <BottomWrap>
                <LabelWrap>
                  <FormLabel for="email">Email</FormLabel>
                  <RequiredAster>&nbsp;*</RequiredAster>
                </LabelWrap>
                <Input type="text" id="email" name="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
                <FormLabel for="phoneNumber">Phone Number</FormLabel>
                <Input type="text" id="phoneNumber" name="phoneNumber" placeholder="Your phone number.."></Input>
                <LabelWrap>
                  <FormLabel for="message">Message</FormLabel>
                  <RequiredAster>&nbsp;*</RequiredAster>
                </LabelWrap>
                <MessageInput type="text" id="message" name="message" placeholder="Your message.." value={message} onChange={(e) => setMessage(e.target.value)} required></MessageInput>

                <ReCAPTCHA
                  sitekey="6LdWc8AjAAAAAJbo1iD4uYQuE6RqKXm4zrUla7ck"
                  onChange={useCallback(() => setDisableSubmit(false))}
                />
                  <FormButton type="submit" disabled={validate()} onClick={handleSubmit}>Submit</FormButton>

              </BottomWrap>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Message

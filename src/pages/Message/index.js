import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, BackButton, FormWrap, BottomWrap, FormContent, Form, FormH1, BothNameWrap, NameWrap, LabelWrap, FormLabel, RequiredAster, NameInput, Input, MessageInput, FormButton, Warning, ButtonWrap } from './MessageElements'
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import ScrollToTop from '../../components/ScrollToTop';
import Swal from 'sweetalert2'

const Message = () => {
  
  const [formData, setFormData] = useState(null);
  const [message, setMessage] = useState({
    message: ""
  });

  let navigate = useNavigate();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");

  const validate = () => {
    if (!disableSubmit) {
      return !((fname !== "") & (lname !== "") & (message !== "") & (note !== ""));

    } else {
      return true;
    }
  };

  const [disableSubmit, setDisableSubmit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    SendToDiscord();
    setFName('');
    setLName('');
    setPhoneNumber('');
    setEmail('');
    setNote('');
    setMessage('');
    window.grecaptcha.reset();
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Christine will get back to you shortly :)'
    })
  }

  const SendToDiscord = async () => {

    const body = {
      content: "Name: " + formData.fname + " " + formData.lname + " // Phone Number: " + formData.phoneNumber + " // Message: " + formData.message,
      username: formData.fname + " " + formData.lname,
      color: "white",
      embeds: [
        {
          title: formData.email,
          url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
          thumbnail: {
            url: "https://3.bp.blogspot.com/-dYvSrltzDvc/W3JAieJvXRI/AAAAAAALndU/zrfd-G6VSZ8cmeKcd6eM-ksBkYvRvVogwCLcBGAs/s1600/TF0006174.png",
          },
        },
      ],
    };

    try {
      const data = await axios.post(
        "https://discord.com/api/webhooks/1059001042827755600/SqY_BinnH4a2FVL4NmFsA0WctXAhyC-2KiiFJJXUjLlWkMmahZdMMqa8NjAbPEWncGkk",
        body
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ScrollToTop />
    <Container>
      <ButtonWrap>
        <BackButton onClick={() => {window.location.reload();
          navigate(-1);}}>GO BACK</BackButton>
      </ButtonWrap>
      <FormWrap>
        <FormContent>
          <Form onSubmit={(e) => {
            e.preventDefault();
            SendToDiscord();
          }}>
            <FormH1>Contact &nbsp;Christine!</FormH1>
            <BothNameWrap>
              <NameWrap>
                <LabelWrap>
                  <FormLabel for="fname">First Name</FormLabel>
                  <RequiredAster>&nbsp;*</RequiredAster>
                </LabelWrap>
                <NameInput type="text" name="fname" placeholder="Your first name.." value={fname} required onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, fname: value });
                  setFName(value);
                }}>
                </NameInput>
              </NameWrap>

              <NameWrap>
                <LabelWrap>
                  <FormLabel for="lname">Last Name</FormLabel>
                  <RequiredAster>&nbsp;*</RequiredAster>
                </LabelWrap>
                <NameInput type="text" name="lname" placeholder="Your last name.." value={lname} required onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, lname: value });
                  setLName(value);
                }}>
                </NameInput>
              </NameWrap>
            </BothNameWrap>

            <BottomWrap>
              <LabelWrap>
                <FormLabel for="email">Email</FormLabel>
                <RequiredAster>&nbsp;*</RequiredAster>
              </LabelWrap>
              <Input type="text" name="email" placeholder="Your email.." value={email} required onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, email: value });
                setEmail(value);
              }}></Input>

              <FormLabel for="phoneNumber">Phone Number</FormLabel>
              <Input type="text" name="phoneNumber" placeholder="Your phone number.." value={phoneNumber} onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, phoneNumber: value });
                setPhoneNumber(value);
              }}></Input>

              <LabelWrap>
                <FormLabel for="note">Message</FormLabel>
                <RequiredAster>&nbsp;*</RequiredAster>
              </LabelWrap>
              <MessageInput type="text" name="note" placeholder="Your message.." value={note} required onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, message: value });
                setNote(value);
              }}></MessageInput>

              <ReCAPTCHA
                sitekey="6LdWc8AjAAAAAJbo1iD4uYQuE6RqKXm4zrUla7ck"
                onChange={useCallback(() => setDisableSubmit(false))}
              />
              <Warning isVisible={validate()}> Hey! You're not done the form yet, don't think about submitting! </Warning>
              <FormButton isVisible={validate()} type="button" disabled={validate()} onClick={handleSubmit}>Submit</FormButton>
            </BottomWrap>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  );
}

export default Message

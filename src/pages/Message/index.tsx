import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BackButton,
  FormWrap,
  Form,
  FormH1,
  FormLabel,
  Input,
  FormButton,
  ButtonWrap,
} from "./MessageElements";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";
import Swal from "sweetalert2";

const Message = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    SendToDiscord();
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Christine will get back to you shortly :)",
    });
  }

  const SendToDiscord = async () => {
    const body = {
      content:
        "Name: " +
        formData.fname +
        " " +
        formData.lname +
        " // Phone Number: " +
        formData.phoneNumber +
        " // Message: " +
        formData.message,
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
      const link =
        "https://discord.com/api/webhooks/1059974716137406616/IG2I5gwZJKVRbDLU0qXOAflnDkrrgEZyd6Px-zV3kUcVWrgJKcAK5SUXzOvJs_"; // missing "sqeBWa" at the end
      const data = await axios.post(link + "sqeBWa", body);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const FormInputData: { label: string; placeholder: string }[] = [
    { label: "First Name", placeholder: "Your first name.." },
    { label: "Last Name", placeholder: "Your last name.." },
    { label: "Email", placeholder: "Your email.." },
    { label: "Phone Number", placeholder: "Your phone number.." },
    { label: "Message", placeholder: "Your message.." },
  ];

  return (
    <>
      <ScrollToTop />
      <Container>
        <ButtonWrap>
          <BackButton
            onClick={() => {
              window.location.reload();
              navigate(-1);
            }}
          >
            GO BACK
          </BackButton>
        </ButtonWrap>
        <FormWrap>
          <Form
            id="myForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
              document.getElementById("myForm").reset();
            }}
          >
            <FormH1>Contact &nbsp;Christine!</FormH1>
            {FormInputData.map((props, i) => {
              let dataNum: number = i;
              var dataString: string = dataNum.toString();
              return (
                <div key={i}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormLabel>{props.label}</FormLabel>
                    <p style={{ fontSize: "14px", color: "red" }}>&nbsp;*</p>
                  </div>
                  <Input
                    placeholder={props.placeholder}
                    required
                    data-key={dataString}
                    onChange={(e) => {
                      if (e.target.getAttribute("data-key") === "0") {
                        setFormData({ ...formData, fname: e.target.value });
                      } else if (e.target.getAttribute("data-key") === "1") {
                        setFormData({ ...formData, lname: e.target.value });
                      } else if (e.target.getAttribute("data-key") === "2") {
                        setFormData({ ...formData, email: e.target.value });
                      } else if (e.target.getAttribute("data-key") === "3") {
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        });
                      } else if (e.target.getAttribute("data-key") === "4") {
                        setFormData({ ...formData, message: e.target.value });
                      }
                    }}
                  ></Input>
                </div>
              );
            })}
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default Message;

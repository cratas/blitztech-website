import { useState, React, useEffect } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Box } from "@mui/system";

import useInput from "./../../hooks/use-input";
import classes from "./UICommon.module.css";
import MyButton from "./MyButton";

export const FormSection = () => {
  const [isEmailSentMessageVisibile, setIsEmailSentMessageVisibile] =
    useState(false);

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChanged,
    inputBlurHandler: nameBlured,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChanged,
    inputBlurHandler: emailBlured,
    reset: emailReset,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChanged,
    inputBlurHandler: messageBlured,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEmailSentMessageVisibile(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isEmailSentMessageVisibile]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      nameBlured();
      emailBlured();
      messageBlured();

      return;
    }

    emailjs
      .sendForm
      // "service_yh4ni9t",
      // "template_hgw34uy",
      // event.target,
      // "qajZ6u7otyXQamiGv"
      ()
      .then(
        (result) => {
          setIsEmailSentMessageVisibile(true);

          nameReset();
          emailReset();
          messageReset();
        },
        (error) => {
          console.log(error.text);
          return;
        }
      );
  };

  return (
    <Container>
      <Box
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Form
          className={classes.contactForm}
          onSubmit={handleFormSubmit}
          style={{ width: "50rem" }}
        >
          <Form.Group className={nameHasError ? "mb-3" : "mb-4"}>
            <Form.Control
              name="name"
              value={name}
              placeholder="Jméno"
              className={classes.formInput}
              onChange={nameChanged}
              onBlur={nameBlured}
              autoComplete="ignore"
            />
            {nameHasError && (
              <Form.Text className={`text-muted ${classes.errorMessage}`}>
                Zadejte prosím jméno.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className={emailHasError ? "mb-3" : "mb-4"}>
            <Form.Control
              name="email"
              value={email}
              placeholder="E-mail"
              className={classes.formInput}
              onChange={emailChanged}
              onBlur={emailBlured}
              autoComplete="new-password"
            />
            {emailHasError && (
              <Form.Text className={`text-muted ${classes.errorMessage}`}>
                Zadejte prosím e-mailovou adresu ve správném formátu.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className={messageHasError ? "mb-3" : "mb-4"}>
            <Form.Control
              value={message}
              as="textarea"
              rows={4}
              name="message"
              placeholder="Obsah zprávy"
              className={classes.formInput}
              onChange={messageChanged}
              onBlur={messageBlured}
              autoComplete="new-password"
            />
            {messageHasError && (
              <Form.Text className={`text-muted ${classes.errorMessage}`}>
                Zadejte prosím zprávu.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3 mt-5" data-aos="fade-in">
            <MyButton text="Odeslat" buttonType="dark" />
          </Form.Group>
          {isEmailSentMessageVisibile && (
            <Form.Text className={`text-muted ${classes.emailSentMessage}`}>
              Zpráva odeslána.
            </Form.Text>
          )}
        </Form>
      </Box>
    </Container>
  );
};

export default FormSection;

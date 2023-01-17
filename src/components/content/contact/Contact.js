import React, { useEffect, memo } from "react";
import { ContactInfo } from "../../UI/ContactInfo";
import { FormWrapper } from "../../UI/FormWrapper";
import { SocialSitesContact } from "../../UI/SocialSitesContact";
import { Box } from "@mui/system";
import { Footer } from "../../UI/Footer";
import { Container } from "react-bootstrap";
import { Heading } from "../../UI/Heading";
import { useDispatch } from "react-redux";
import { navActions } from "../../../redux/navSlice";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navActions.linkContact());
  }, []);

  return (
    <>
      <ContactInfo />

      <FormWrapper />

      <SocialSitesContact />

      <Container>
        <Box mb={7}>
          <Heading
            miniTitle="Poloha"
            title="Kde sídlíme?"
            miniTitleColor="var(--color-light-grey)"
            titleColor="var(--color-dark-blue)"
            variant="h4"
          />

          {/* TODO: fill proper location */}
          <iframe
            title="google api map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.2770282607394!2d18.049371115935266!3d49.66792015131828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713ebe4d12c0f3f%3A0xf8a26f1995547382!2sBarto%C5%A1ovice%20393%2C%20742%2054%20Barto%C5%A1ovice!5e0!3m2!1scs!2scz!4v1652778382203!5m2!1scs!2scz"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            style={{
              border: 0,
              marginTop: "-1rem",
              borderRadius: "0.5rem",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            }}
            position="relative"
            data-aos="fade-up"
          />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default memo(Contact);

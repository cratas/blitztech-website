import React from "react";
import { Box } from "@mui/system";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import FormSection from "./FormSection";

export const FormWrapper = () => {
  return (
    <Box backgroundColor="var(--color-light-blue)" pb={5} mt={3} data-aos="fade-right" >
      <Container>
        <Heading
          miniTitle="Formulář"
          title="Kontaktní formulář"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-white)"
          variant="h5"
        />

        <FormSection />
      </Container>
    </Box>
  );
};

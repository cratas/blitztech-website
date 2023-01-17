import classes from "../content/home/Home.module.css";
import { Container } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { Box } from "@material-ui/core";
import fotovoltaicHouse from "../../assets/fotovoltaic.jpg";
import { DotsDesign } from "./DotsDesign";
import { DOTS_COLOURS } from "../../constants/constants";

export const IntroImage = () => {
  return (
    <Box
      style={{
        background:
          "linear-gradient(0deg, var(--color-dark-blue) 50%, var(--color-white) 50%)",
      }}
      data-aos="zoom-in"
    >
      <Container>
        <Box className={classes.imageWrapper} >
          <div className={classes.rightTopDots}>
            <DotsDesign variant={DOTS_COLOURS.dark_blue} />
          </div>
          <div className={classes.leftBottomDots}>
            <DotsDesign variant={DOTS_COLOURS.white} />
          </div>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={fotovoltaicHouse}
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
              zIndex: "0",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

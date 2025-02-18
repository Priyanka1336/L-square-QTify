import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <h1>FAQs</h1>
      <div className={styles.queswrapper}>
        <Accordion sx={{ borderRadius: "10px", width: "80%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#34c94b" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#121212",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              Is Qtify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ borderRadius: "10px", width: "80%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#34c94b" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              backgroundColor: "#121212",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              Can i download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;

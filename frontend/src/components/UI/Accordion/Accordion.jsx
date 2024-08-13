import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionComponent(props) {
  return (
    <Accordion sx={{ boxShadow: 'none' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {props.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>


  );
}

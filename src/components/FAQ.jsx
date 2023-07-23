import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ({question, answer}) {
  return (
    <div>
      <Accordion style={{backgroundColor: 'black', borderRadius: '5px', width: 870}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{color: 'white'}}
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'white', border: '1px solid black', borderRadius: '5px'}}>
          <Typography style={{textAlign: 'left'}}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Add more Accordion components for more FAQs */}
    </div>

  );
}


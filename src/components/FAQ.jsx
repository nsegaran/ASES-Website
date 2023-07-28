import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function FAQ({question, answer}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Accordion style={{backgroundColor: 'black', borderRadius: '5px'}} className="max-w-840 w-full m:w-3/4 s:w-1/2">
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
    </div>

  );
}



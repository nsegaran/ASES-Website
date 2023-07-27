import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQ from "../../../components/FAQ"
import faqData from "../../../components/textContent/homeFAQData.json";


export default function FAQSection() {
  return (
    <div className="p-4">
      <div className="App min-vh-100 d-flex flex-column justify-content-center align-items-center gap-2">
        {faqData.map((d) => {
          return <FAQ question={d.question} answer={d.answer} />;
        })}
      </div>
    </div>
  );
};

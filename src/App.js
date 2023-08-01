import './App.css';
import LongButtonWArrowCustomized from './components/LongButtonWithArrow';
import LongButtonWOArrowCustomized from './components/LongButtonWOArrow';
import ShortButtonCustomized from './components/ShortButton';
import ProfileCard from './components/ProfileCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material';
import TopBar from './components/TopBar';
import TypingText from './components/TypingText';
import Footer from './components/Footer';
import SponsorsBanner from './components/SponsorsBanner.js';
import 'normalize.css';



const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'Space Grotesk',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar/>
      <TypingText words={["Stanford’s premiere entrepreneurship society"]} noDelete={true} textStyle={{color: "black", fontFamily: "Space Grotesk", fontSize: "60px", fontWeight: 600}}/>
      <SponsorsBanner/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

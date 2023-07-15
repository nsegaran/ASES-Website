import './App.css';
import LongButtonCustomized from './components/LongButton';
import ShortButtonCustomized from './components/ShortButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material';


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
      <div className="App min-vh-100 d-flex justify-content-center align-items-center">
        <LongButtonCustomized />
        <ShortButtonCustomized />
      </div>
    </ThemeProvider>
  );
}

export default App;

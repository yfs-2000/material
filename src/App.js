import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
const theme = createTheme({
    palette: {
        primary: {
            main:"#00a9eb",
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    //fontSize: '1rem',
                    borderRadius:0
                },
            },
        },
    },
  /*  subtitle1: {
        fontSize: 12,
    },
    body1: {
        fontWeight: 500,
    },*/
});
function App() {
  return (
      <div className={"app"}>
          <ThemeProvider theme={theme}>
              <Button variant="contained">你好，世界</Button>
              <div>
                  123
              </div>
          </ThemeProvider>
      </div>


  );
}

export default App;

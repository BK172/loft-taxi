import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffc617"
    },
    secondary: {
      main: "#ff0000"
    }
  },
  status: {
    danger: orange[500]
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#828282"
        }
      }
    },
    MuiLink: {
      root: {
        color: "#fdbf5a",
        cursor: "pointer"
      },
      underlineHover: {
        "&:hover": {
          textDecoration: "none"
        }
      }
    },
    MuiInput: {
      underline: {
        "&:after": {
          "border-bottom-color": "#1473e6"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        bottom: "-1.2em"
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedPrimary: {
        borderRadius: "40px",
        color: "#000000de",
        fontWeight: "400",
        letterSpacing: "0px",
        backgroundColor: "#fdbf5a",
        "&:hover": {
          backgroundColor: "#ffa842"
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
        }
      },
      containedSizeLarge: {
        fontSize: "1.3rem"
      }
    },
    MuiTypography: {
      h4: {
        marginBottom: "2.75rem",
        fontSize: "1.65rem",
        textAlign: "center",
        fontWeight: "700"
      }
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

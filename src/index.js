import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009223",
      secondary:"#ffc20e"
    }
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <BrowserRouter>
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

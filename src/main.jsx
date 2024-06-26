import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./context/AppContext.jsx";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = createTheme({
  // define tu tema aquí
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <AppContextProvider>
          <CssBaseline />
          <App />
        </AppContextProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

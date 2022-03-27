import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Starting from "./pages/Starting";
import SelectLang from "./pages/SelectLang";
import { Route, Routes } from "react-router-dom";
import RoleMenu from "./pages/RoleMenu";
import LogReg from "./pages/LogReg";
import SignUp from "./pages/SignUp";
import OTP from "./pages/OTP";
import Bank from "./pages/Bank";
import SelectPlant from "./pages/SelectPlant";
import { theme } from "./theme.jsx";

ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Starting />} />

            <Route path="lang" element={<SelectLang />} />
            <Route path="role" element={<RoleMenu />} />
            <Route path="option" element={<LogReg />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="otp" element={<OTP />} />
            <Route path="bank" element={<Bank />} />
            <Route path="center" element={<SelectPlant />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

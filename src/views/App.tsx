import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "app/theme";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalCss from "./includes/GlobalCss";
import Layout from "./includes/Layout";
import Loading from "./components/base/Loading";

const App: FC = () => {

  return <ThemeProvider theme={ theme }>
    <CssBaseline />
    <StyledEngineProvider injectFirst>
      <GlobalCss />
    </StyledEngineProvider>
    <Suspense fallback={ <Loading /> }>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="*" element={ <Layout /> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </ThemeProvider>

}

export default App;
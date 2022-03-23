import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Themes";
import {
  Home,
  About,
  Roadmap,
  Showcase,
  Team,
  Faq,
} from "./components/section";
import { Navigation, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;

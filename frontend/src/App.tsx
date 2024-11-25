import usePageChangeScroll from "./hooks/usePageChangeScroll";
import Router from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  usePageChangeScroll();

  console.log("HERE??", "OK????");
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;

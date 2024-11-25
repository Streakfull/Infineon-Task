import usePageChangeScroll from "./hooks/usePageChangeScroll";
import Router from "./routes";

const App = () => {
  usePageChangeScroll();

  console.log("HERE??", "OK????");
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;

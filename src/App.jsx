import Header from "./component/layout/Header";
import Main from "./component/layout/Main";
import { FilmsProvider } from "./context/FilmsContext";
import { SeriesProvider } from "./context/SeriesContext";

function App() {
  return (
    <>
      <SeriesProvider>
        <FilmsProvider>
          <Header></Header>
          <Main></Main>
        </FilmsProvider>
      </SeriesProvider>
    </>
  );
}

export default App;

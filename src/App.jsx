import Header from "./component/layout/Header";
import Main from "./component/layout/Main";
import { FilmsProvider } from "./context/FilmsContext";

function App() {
  return (
    <>
      <FilmsProvider>
        <Header></Header>
        <Main></Main>
      </FilmsProvider>
    </>
  );
}

export default App;

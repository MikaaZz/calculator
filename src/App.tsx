import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { SubTitle, Title } from "./styles/styles";

function App() {
  return (
    <div className="App">
      <Title>Calculator APP</Title>
      <SubTitle>Subtitle Calculator</SubTitle>
      <Calculator />
    </div>
  );
}

export default App;

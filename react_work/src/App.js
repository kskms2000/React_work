import './App.css';
import {SayHello} from './Components/FunctionalComponents';
import Welcome from './Components/ClassComponents';
import Greet from './Components/WithoutJSX';

function App() {
  return (
    <div>
      <SayHello></SayHello>
      <Welcome></Welcome>
      <Greet />
    </div>
  );
}

export default App;

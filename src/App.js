import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import Tooltip from './Components/Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip>
        <Button className="red"/>
      </Tooltip>
      <Tooltip>
        <Input />
      </Tooltip>
    </div>
  );
}

export default App;

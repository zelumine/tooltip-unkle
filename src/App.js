import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import Tooltip from './Components/Tooltip';

function App() {
  return (
    <div className="App">
      <h1>Test tooltip</h1>
      <Tooltip 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum dictum, fermentum nulla vel, posuere turpis. Aenean iaculis ipsum in nisl fringilla faucibus. 
        Mauris fermentum massa accumsan sapien interdum, id pulvinar odio mollis. Aenean a leo vehicula, scelerisque quam vel, facilisis metus. 
        Nunc lacinia nisi faucibus mi rhoncus, non interdum dui vehicula. Sed sed maximus massa. Cras tellus eros, tincidunt vel sollicitudin non, vehicula vel est. 
        Curabitur id sapien laoreet, accumsan lacus vel, varius odio. Donec gravida imperdiet magna, et viverra felis maximus eget."
      >
        <label>Nom</label> <br />
        <input type="text" />
      </Tooltip>
      <br />
      <Tooltip text="khljkgmljgljkg" position="top">
        <label>Prénom</label>
        <Input />
      </Tooltip>
      <br />
      <Tooltip text="Hello from the tooltip side" position="left">
        <label>E-mail</label> <br />
        <input type="email" />
      </Tooltip>
      <br />
      <Tooltip text=" " position="bottom">
        <Button />
      </Tooltip>
    </div>
  );
}

export default App;

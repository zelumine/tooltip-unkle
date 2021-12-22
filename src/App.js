import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import Tooltip from './Components/Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum dictum, fermentum nulla vel, posuere turpis. Aenean iaculis ipsum in nisl fringilla faucibus. 
        Mauris fermentum massa accumsan sapien interdum, id pulvinar odio mollis. Aenean a leo vehicula, scelerisque quam vel, facilisis metus. 
        Nunc lacinia nisi faucibus mi rhoncus, non interdum dui vehicula. Sed sed maximus massa. Cras tellus eros, tincidunt vel sollicitudin non, vehicula vel est. 
        Curabitur id sapien laoreet, accumsan lacus vel, varius odio. Donec gravida imperdiet magna, et viverra felis maximus eget."
      >
        <Button className="red"/>
      </Tooltip>
      <br />
      <Tooltip text="khljkgmljgljkg">
        <Input />
      </Tooltip>
      <br />
      <Tooltip text=" ">
        <p>Je teste aussi avec du HTML normal</p>
        <b>Youhou</b>
      </Tooltip>
    </div>
  );
}

export default App;

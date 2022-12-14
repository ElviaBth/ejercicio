import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import FunctionButton from './components/FunctionButton';
import Input from './components/Input';

function App() {
  return (
    <>
      <h1>Hola React</h1>
      <p>Cómo estas?</p>
      <Button class= 'solid' text= "Click Here"/>
      <Button class= 'frame' text= "Submit"/>
      <Button/>
      <FunctionButton class="solidF" text="Funcional" />
      <FunctionButton />
      <Input />
      <Link to = ' /pagina2'> Ir a la segunda página</Link>
    </>
  );
}

export default App;

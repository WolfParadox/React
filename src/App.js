import './App.css';
import './components/HellowWorld'
import HelloWorld from './components/HellowWorld';



function App() {

const name = 'Felipe'

const newName = name.toUpperCase()

function sum(a, b){
  return a + b
}

const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
     <h1>Ola React!</h1>
     <p>Olá, {newName}</p>
     <p>soma: {sum(1, 2)} </p>
    <img src={url} alt="Minha Imagem"/>
    < HelloWorld/>

    </div>
  );
}

export default App;

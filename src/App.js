import './App.css'
import HelloWorld from './components/HellowWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {

const url = 'https://via.placeholder.com/150'

const name = 'Maria'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
    <SayMyName name="Felipe"/>
    <SayMyName name="Jéssica"/>
    <SayMyName name={name}/>
    <Pessoa name='Felipe' idade='23' profissao='Motorista' foto= 'https://via.placeholder.com/150'/>
    <List/>
    </div>
  )
}

export default App;

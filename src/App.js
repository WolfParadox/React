import './App.css'
import HelloWorld from './components/HellowWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {

const url = 'https://via.placeholder.com/150'

const name = 'Maria'
  return (
    
    <div className="App">
    < HelloWorld/>
    <SayMyName name="Felipe"/>
    <SayMyName name="Jéssica"/>
    <SayMyName name={name}/>
    <Pessoa name='Felipe' idade='23' profissao='Motorista' foto= 'https://via.placeholder.com/150'/>
    </div>
  )
}

export default App;


import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='main-container'>
      <ItemListContainer  section="Muñecos Tejidos"/>
      </div>
      
      {/*<Modal title="Modal de Registro">
      <form>
        <input tipe="text"/>
        <button>enviar</button>
      </form>
      </Modal>*/}
    
    </div>
  )
}

export default App;


import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='main-container'>
      <ItemListContainer  section="Muñecos Tejidos"/>
      <ItemCount/>
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

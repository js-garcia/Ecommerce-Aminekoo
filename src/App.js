
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';


function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='main-container'>
        <Item/>
      <ItemListContainer  section="Muñecos Tejidos"/>
      <ItemList/>
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

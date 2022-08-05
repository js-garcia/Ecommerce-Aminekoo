
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <div className="container">
      <NavBar />
      <div className='main-container'>
        {/*<Item/> */}
      <ItemListContainer  section="Muñecos Tejidos"/>
      <ItemDetail/>
      {/*<ItemList/>*/}
      {/*<ItemCount/> */}
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

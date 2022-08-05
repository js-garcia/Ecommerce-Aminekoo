import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
    return(
        <div className="container" >
            <section className='main-container'>
            <ItemListContainer section="Productos en oferta"/>
            </section>
        </div>
    )
}

export default Home
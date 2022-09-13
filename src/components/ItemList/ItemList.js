import Item from "../Item/Item";

const ItemList = ({ dataProducts }) => {
    return (
        <>
            {
                dataProducts.map((prod) => {
                    return <Item key={prod.id} datos={prod}/>   
                })
            }
        </>
    )
}

export default ItemList;
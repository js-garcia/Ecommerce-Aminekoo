import {useState} from 'react'

const ItemCount = (stock) => {
    const[counter, setCounter] = useState(1)

    const addNumber = () => {
        if(stock)
        setCounter(counter + 1)
    }

    const removeNumber = () => {
        if(stock)
        setCounter(counter - 1)
    }

    return(
        <div className='countProd'>
        <button onClick={removeNumber}>-</button>
        <p>{counter}</p>
        <button onClick={addNumber}>+</button>
    </div>
    )

}

export default ItemCount
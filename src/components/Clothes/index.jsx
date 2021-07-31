import React from 'react';
import './index.scss';
import Dresses from '../Dresses';
import axios from 'axios';

import { addToCart } from '../../redux/action/cart';
import { useDispatch, useSelector } from 'react-redux';

const Clothes = ({searchValue}) => {
    const dispatch = useDispatch();

    const [goods, setGoods] = React.useState([]);

    React.useEffect(async()=>{
        const responce = await axios.get('http://localhost:3001/goods');
        setGoods(responce.data)
    }, [])


    const handleAddPizzaToCart = obj =>{
        dispatch(addToCart(obj))
    }

    const cartItems = useSelector(({ cart }) => cart.items);

    return (
        <div className='clothes row'>
            {goods.filter((item)=> {
                return item.name.toLowerCase().includes(searchValue.toLowerCase())
            }).map((item) => {
                return <Dresses 
                onClickAddPizza={handleAddPizzaToCart} 
                name={item.name} 
                {...item} 
                id={item.id}/>
                })
            }
        </div>
    )
}

export default Clothes;

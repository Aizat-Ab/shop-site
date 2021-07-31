import React from 'react';
import './index.scss';
import { addToCart } from '../../redux/action/cart';
import { useDispatch } from 'react-redux';

const Dresses = ({id, name, imageUrl, price, onClickAddPizza, addedCount}) => {
    
    const dispatch = useDispatch();

    const onAddPizza = () => {
        const obj = {
            id,
            name, 
            imageUrl, 
            price
        }
        onClickAddPizza(obj)
    }

    return (
        <div className='dresses'>
           <div className='dresses__item'>
            <img src={imageUrl} alt="goods" />
            <p className='dresses__name'>{name}</p>
            <div className='dresses__item row'>
            <p className='dresses__price'>{price} руб.</p>
            <label onClick={onAddPizza} className='label'>
            <input className='checkbox' type='checkbox'/>
            <span className='fake'/>
           </label>
            </div>
            </div>

        </div>
    )
}

export default Dresses;

import React from 'react';
import './index.scss';
import CartItem from '../CartItem';
import { useDispatch, useSelector } from 'react-redux';
import {clearAll, removeItem} from '../../redux/action/cart';
import box from '../../assets/box.png';

const Cart = ({ref, setActiveCart}) => {

    const dispatch = useDispatch();

    const {totalCount, totalPrice, items} = useSelector(({cart}) => cart);

    const addGoods = Object.keys(items).map((key) => {
        return items[key].items[0];
    })

    const deleteAll = () => {
    if(window.confirm('Вы действительно хотите очистить корзину?')){
        dispatch(clearAll())
    }
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')){
            dispatch(removeItem(id))
        }
    }

    return (
        <div className='cart'>
            <div className='cart__item'>
               {
                   totalCount ?  <div>
                   <div className='cart__row row'>
                   <h2>Корзина</h2>
                   <p onClick={deleteAll}>Очистить корзину!</p>
                   <svg onClick={()=> setActiveCart()} width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#B5B5B5"/>
   </svg>
                   </div>
                   
                   {addGoods.map((obj) => {
                   return <CartItem {...obj} 
                   id={obj.id}
                   totalPrice={items[obj.id].totalPrice} 
                   totalCount={items[obj.id].items.length}
                   onRemove={onRemoveItem}/>})}
                   {/* <CartItem/> */}
   
                   <ul className='cart__block'>
                       <li className='row'>
                           <span>Итого:</span>
                           <div></div>
                           <b>{totalPrice} руб</b>
                       </li>
                       <li className='row'>
                           <span>Налог 6%</span>
                           <div></div>
                           <b>руб.</b>
                       </li>
                   </ul>
                   <button className='cart__btn'>Оформить заказ 
                   <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
   <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>
   </button>
                   </div> : (
 <div>
 <img src={box} alt="" />
 <p>Корзина пуста</p>
 <p>Добавьте хотя бы один товар, чтобы сделать заказ.</p>
 </div>
                   )
               }
            </div>


            
               
        </div>
    )
}

export default Cart;

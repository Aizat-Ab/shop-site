import React from 'react';
import './index.scss';
import CartItem from '../CartItem';

const Cart = ({ref, setActiveCart}) => {
    return (
        <div className='cart'>
            <div className='cart__item'>
                <div className='cart__row row'>
                <h2>Корзина</h2>
                <svg onClick={()=> setActiveCart()} width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#B5B5B5"/>
</svg>
                </div>
                <CartItem/>
                <ul className='cart__block'>
                    <li className='row'>
                        <span>Итого:</span>
                        <div></div>
                        <b>руб</b>
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
            </div>
        </div>
    )
}

export default Cart;

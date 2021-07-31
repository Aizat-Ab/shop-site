import React from 'react';
import './index.scss';

const CartItem = ({id, name, price, imageUrl, totalPrice, totalCount, onRemove}) => {
    const handleRemoveItem = () => {
        onRemove(id)
    }
    return (
        <div className='cartItem row'>
            <img src={imageUrl} alt="goods" />
            <div className='cartItem__right row'>
            <p className='cartItem__name'>{name}</p>
            <p className='cartItem__price'>{totalPrice} руб.</p>
            <p className='cartItem__total'>количество: {totalCount}  шт.</p>
            </div>
            <div>
            <button onClick={handleRemoveItem} className='cartItem__svg'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#747474"/>
</svg>
            </button>
            </div>
        </div>
    )
}

export default CartItem

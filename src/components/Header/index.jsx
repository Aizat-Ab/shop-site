import React from 'react';
import './index.scss';

//icons
import cart from '../../assets/icons/cart.svg';
import like from '../../assets/icons/like.svg';
import order from '../../assets/icons/order.svg';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = ({open}) => {
    
    const { totalCount, totalPrice } = useSelector((redux) => redux.cart);

    // const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <div className='header row'>
            <div className='header__logo row'>
                <p className='header__nc'>NC</p>
            <div className='header__logo-text'>
            <p>REACT SHOP</p>
            <span>магазин женской одежды</span>
            </div>
            </div>
            <div className='header__nav-logo row'>
                <div onClick={open} className='header__cart'>
                    <img src={cart} alt="cart-logo" />
                    <span>{totalPrice} руб.</span>
                    <span>{totalCount} шт.</span>
                </div>
                <img src={like} alt="like-logo" />
              <Link to='order'><img src={order} alt="order-logo" /></Link>
            </div>
        </div>
    )
}

export default Header;

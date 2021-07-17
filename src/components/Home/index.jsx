import React from 'react';
import './index.scss';
import Header from '../Header';
import Slider from '../Slider';
import Goods from '../Goods';
import Cart from '../Cart';

const Home = () => {
    const [ activeCart, setActiveCart ] = React.useState(false);
    
    // const ref = React.useRef();

    // const handleClickOutSide = (event) => {
    //     if(!event.path.includes(ref.current)){
    //         setActiveCart(false)
    //     }
    // }
    // React.useEffect(() => {
    //     document.body.addEventListener('click', handleClickOutSide)
    // }, [])
   
    return (
        <div className='home container'>
            {activeCart && <Cart setActiveCart={setActiveCart}/>}
            <Header open={()=> setActiveCart(!activeCart)}/>
            <Slider/>
            <Goods />
           
        </div>
    )
}

export default Home;

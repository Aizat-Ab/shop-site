import React from 'react';
import './index.scss';
import Dresses from '../Dresses';
import axios from 'axios';

const Clothes = ({searchValue}) => {
    const [goods, setGoods] = React.useState([]);

    React.useEffect(async()=>{
        const responce = await axios.get('http://localhost:3001/goods');
        setGoods(responce.data)
    }, [])

    return (
        <div className='clothes row'>
            {goods.filter((item)=> {
                return item.name.toLowerCase().includes(searchValue.toLowerCase())
            }).map((item) => {
                return <Dresses name={item.name} {...item} id={item.id}/>
                })
            }
        </div>
    )
}

export default Clothes;

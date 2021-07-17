import React from 'react';
import './index.scss';
import Clothes from '../Clothes';
import clear from '../../assets/icons/clear.svg';

const Goods = () => {
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
        <div className='goods'>
            <h2>{searchValue ? `Поиск по запроску "${searchValue}"`: 'Все одежды'}</h2>
            <label className='goods__search'>
            <input value={searchValue} onChange={onChangeSearchInput} placeholder='Поиск'/>
            {searchValue && <img className='goods__clear' onClick={()=>setSearchValue('')} src={clear} alt="clear"/>}
            </label>
        </div>
        <Clothes searchValue={searchValue}/>
        </>
    )
}

export default Goods;

import React, { useContext } from 'react';
import Dish from './Dish'
import DishContext from '../context/dish-context';

const DishList = () => {
    const {dishes} = useContext(DishContext);

    return dishes.map((dish)=>(
        <Dish key={dish.name} dish={dish} />
    ))
}

export {DishList as default}
import React, { useContext } from 'react';
import Dish from './Dish'
import DishContext from '../context/dish-context';

const DishList = () => {
    const {responses} = useContext(DishContext);
    return responses.map((response)=>(
        <div>
            <Dish key={response.id} response={response} />
        </div>
    ))
}

export {DishList as default}
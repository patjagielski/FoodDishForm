import React, { useState, useEffect, useReducer } from 'react';
import SelectDishForm from './SelectDishForm';
import DishContext from '../context/dish-context';
import DishList from './DishList';
import dishesReducer from '../reducers/dishes';
import SubmitOrder from './SubmitOrder';

const MyDish = () =>{
    const [dishes, dispatch] = useReducer(dishesReducer, []);

    return(
        <DishContext.Provider value={{dishes, dispatch}}>
            <h1>My Dish Application</h1>
            <SelectDishForm />
            <DishList />
            <SubmitOrder />
        </DishContext.Provider>
    );
}

export {MyDish as default};
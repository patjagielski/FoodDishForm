import React, { useState, useEffect, useReducer } from 'react';
import SelectDishForm from './SelectDishForm';
import DishContext from '../context/dish-context';
import DishList from './DishList';
import dishesReducer from '../reducers/dishes';

const MyDish = () =>{
    const [dishes, dispatch] = useReducer(dishesReducer, []);

    // useEffect(() => {
    //     const dishes = JSON.parse(localStorage.getItem('dishes'));
    
    //     if(dishes){
    //       dispatch({type: 'POPULATE_DISHES', dishes })
    //     }
    //   }, []);

    return(
        <DishContext.Provider value={{dishes, dispatch}}>
            <h1>My Dish Application</h1>
            <SelectDishForm />
            <DishList />
        </DishContext.Provider>
    );
}

export {MyDish as default};
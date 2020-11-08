import React, {useReducer } from 'react';
import SelectDishForm from './SelectDishForm';
import DishContext from '../context/dish-context';
import DishList from './DishList';
import dishesReducer from '../reducers/dishes';


const MyDish = () =>{
    const [responses, dispatch] = useReducer(dishesReducer, []);

    return(
        <DishContext.Provider value={{responses, dispatch}}>
            <div className="header">
                <div className="container">
                    <h1 className="header__title">My Dish Application</h1>
                    <h2 className="header__subtitle">Place Your Order Now!</h2>
                </div>
            </div>
            <SelectDishForm />
            <div className="container">
                <h3 className="container__title">Order Reciepts Below:</h3>
            </div>
            <div className="wrapper">
                <DishList />
            </div>
        </DishContext.Provider>
    );
}

export {MyDish as default};
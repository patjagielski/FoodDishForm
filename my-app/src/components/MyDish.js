import React, {useReducer } from 'react';
import SelectDishForm from './SelectDishForm';
import DishContext from '../context/dish-context';
import DishList from './DishList';
import Header from './Header';
import dishesReducer from '../reducers/dishes';


const MyDish = () =>{
    const [responses, dispatch] = useReducer(dishesReducer, []);

    return(
        <DishContext.Provider value={{responses, dispatch}}>
            <Header />
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
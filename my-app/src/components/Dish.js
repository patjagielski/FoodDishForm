import React, { useContext} from 'react';
import DishContext from '../context/dish-context';

const Dish = ({dish}) => {
    const {dispatch} = useContext(DishContext);
    return(
        <div>
            <h2>{dish.name}</h2>
            <p>{dish.information}</p>
            <p>{dish.time}</p>
            <button onClick={() => dispatch({type:'REMOVE_DISH', name: dish.name})}>X</button>
        </div>
    )
}
export {Dish as default};
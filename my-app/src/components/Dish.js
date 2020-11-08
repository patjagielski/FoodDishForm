import React, { useContext} from 'react';
import DishContext from '../context/dish-context';

const Dish = ({dish}) => {
    const {dispatch} = useContext(DishContext);
    return(
        <div>
            <h2>{dish.name}</h2>
            <p>{dish.type}</p>
            <p>{dish.preparation_time}</p>
            <button onClick={() => dispatch({set:'REMOVE_DISH', name: dish.name})}>X</button>
        </div>
    )
}
export {Dish as default};
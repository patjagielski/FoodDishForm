import React, { useContext} from 'react';
import DishContext from '../context/dish-context';

const Dish = ({response}) => {
    const {dispatch} = useContext(DishContext);

    return(
        <div>
            <h2>{response.id}</h2>
            <p>{response.name}</p>
            <p>{response.type}</p>
            <p>{response.preparation_time}</p>
            <p>{response.diameter}</p>
            <button onClick={(()=>{dispatch({set: 'REMOVE_DISH', name: response.name})})}>X</button>
        </div>
    )
}
export {Dish as default};
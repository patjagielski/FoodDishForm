import React, { useContext} from 'react';
import DishContext from '../context/dish-context';

const Dish = ({response}) => {
    const {dispatch} = useContext(DishContext);

    return(
        <div className="card">
            <h3>ID: {response.id}</h3>
            <p>Name: {response.name}</p>
            <p>Type: {response.type}</p>
            <p>Prep time: {response.preparation_time}</p>
            {response.diameter ? (
                <div>
                    <p>Diameter: {response.diameter}</p>
                    <p>No Slices: {response.no_of_slices}</p>
                </div>
            ): response.spiciness_scale ? (
                <p>Spiciness: {response.spiciness_scale}</p>
            ):(
                <p>No.Slices Bread: {response.slices_of_bread}</p>
            )}
            
            <button className="delete-button" onClick={(()=>{dispatch({set: 'REMOVE_DISH', name: response.name})})}>X</button>
        </div>
    )
}
export {Dish as default};
import React, { useContext} from 'react';
import DishContext from '../context/dish-context';
import axios from 'axios';


const SubmitOrder = () => {
    const {dishes} = useContext(DishContext);
    
    const submitOrder = (e) => {
        e.preventDefault();
        dishes.map((dish) =>{
            let body = {
                name: dish.name,
                preparation_time: dish.preparation_time,
                type: dish.type,
                no_of_slices: parseInt(dish.no_of_slices),
                diameter: parseFloat(dish.diameter),
                spicniness_scale: dish.spicniness_scale,
                // slices_of_bread:dish.slices_of_bread
            }
            axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', body)
                .then(function(res){
                    console.log('success');
                    console.log(res);
                })
                .catch(function(err){
                    console.log(body);
                    console.log(err);
                });
        })
    }

    return(
        <div>
            <button onClick={submitOrder}>Submit Order Now</button>
        </div>
    )
}
export {SubmitOrder as default};
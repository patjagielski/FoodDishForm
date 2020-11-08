const dishesReducer = (state, action) => {
    switch(action.set){
        case 'ADD_DISH':
            return[
                ...state,
                {name: action.name,
                    preparation_time: action.preparation_time,
                    type: action.type,
                    no_of_slices: action.no_of_slices,
                    diameter: action.diameter,
                    spiciness_scale: action.spiciness_scale,
                    slices_of_bread: action.slices_of_bread}
            ];
        case 'POPULATE_DISH':
            return action.dishes;
        case 'REMOVE_DISH':
            return state.filter((dish) => dish.name !== action.name);
        case 'SEND_REQUEST':
            return{
                name: action.name,
                preparation_time: action.preparation_time,
                type: action.type,
                no_of_slices: action.no_of_slices,
                diameter: action.diameter,
                spiciness_scale: action.spiciness_scale,
                slices_of_bread: action.slices_of_bread
            };
        default:
            return state;
    }
}

export {dishesReducer as default};
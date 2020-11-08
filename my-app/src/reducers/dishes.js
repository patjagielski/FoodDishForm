const dishesReducer = (state, action) => {
    switch(action.set){
        case 'SEND_REQUEST':
            if(action.type === 'pizza'){
                return[...state, {
                    id: action.id,
                    name: action.name,
                    preparation_time: action.preparation_time,
                    type: action.type,
                    no_of_slices: action.no_of_slices,
                    diameter: action.diameter
                }];    
            }else if(action.type === 'soup'){
                return [...state,{
                    id: action.id,
                    name: action.name,
                    preparation_time: action.preparation_time,
                    type: action.type,
                    spiciness_scale:action.spiciness_scale
                }];
            }else{
                return [...state,  {
                    id: action.id,
                    name: action.name,
                    preparation_time: action.preparation_time,
                    type: action.type,
                    slices_of_bread:action.slices_of_bread
                }];
            }
            case 'REMOVE_DISH':
                return state.filter((dish) => dish.name !== action.name);
            
        default:
            return state;
    }
}

export {dishesReducer as default};
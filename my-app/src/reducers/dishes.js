const dishesReducer = (state, action) => {
    switch(action.type){
        case 'ADD_DISH':
            return[
                ...state,
                {name: action.name, time:action.time, information: action.information}
            ];
        case 'POPULATE_DISH':
            return action.dishes;
        case 'REMOVE_DISH':
            return state.filter((dish) => dish.name !== action.name);
        default:
            return state;
    }
}

export {dishesReducer as default};
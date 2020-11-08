import React, {useState, useContext} from 'react';
import DishContext from '../context/dish-context';

const SelectDishForm = () =>{
    const required = false;
    const {dispatch} = useContext(DishContext);
    const [name, setName] = useState(''); 
    const [type, setInfo] = useState('');
    const [preparation_time, setTime] = useState('');
    const [no_of_slices, setPizzaSlices] = useState('');
    const [diameter, setDiameter] = useState('');
    const [spiciness_scale, setSpice] = useState('');
    const [slices_of_bread, setBread] = useState('');

    const addDish = (e) => {
        
        e.preventDefault();
        dispatch({
          set: 'ADD_DISH',
          name,
          preparation_time,
          type,
          no_of_slices,
          diameter,
          spiciness_scale,
          slices_of_bread
        })
        setName('');
        setInfo('');
        setTime('');
        if(type === 'pizza'){
            setPizzaSlices('');
            setDiameter('');
        }else if(type === 'soup'){
            setSpice('');
        }else{
            required = true;
            setBread('');
        }
        
        
        
      }
      
    return(
        <>
            <p>Adding Dishes here</p>
            <form onSubmit={addDish}>
                <textarea value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter Dish name here" required/>
                <input onChange={(e) =>setTime(e.target.value)} value={preparation_time} type="time" step='1' required/>
                <select onChange={(e) =>setInfo(e.target.value)} value={type} required>
                    <option value=''>None</option>
                    <option value='pizza'>Pizza</option>
                    <option value='soup'>Soup</option>
                    <option value='sandwich'>Sandwich</option>
                </select>
                {type === 'pizza'  ? (
                    <div>
                    <input type='number' placeholder='enter number of slices' value={no_of_slices} onChange={(e) =>setPizzaSlices(e.target.value)}/>
                    <input type='number' step='0.01' placeholder='enter diameter' value={diameter} onChange={(e) =>setDiameter(e.target.value)}/>
                    </div>
                    
                ) : type === 'soup' ? (
                    <div>
                    <select id='spicy_scale' value={spiciness_scale} onChange={(e) =>setSpice(e.target.value)}>
                        <option value=''>-</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                    </div>
                ): type === 'sandwich'  ? (
                    <div>
                        <input type='number' value={slices_of_bread} onChange={(e) =>setBread(e.target.value)} required ={required}/>
                    </div>
                ) :( null )}
                        
                <button>Submit</button>
            </form>
        </>
    )
}

export {SelectDishForm as default};


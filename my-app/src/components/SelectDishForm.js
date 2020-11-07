import React, {useState, useContext} from 'react';
import DishContext from '../context/dish-context';

const SelectDishForm = () =>{
    const {dispatch} = useContext(DishContext);
    const [name, setName] = useState(''); 
    const [information, setInfo] = useState('');
    const [time, setTime] = useState('');

    const addDish = (e) => {
        e.preventDefault();
        dispatch({
          type: 'ADD_DISH',
          name,
          time,
          information
        })
        setName('');
        setInfo('');
        setTime('');
      }
      

    return(
        <>
            <p>Adding Dishes here</p>
            <form onSubmit={addDish}>
                <textarea value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter Dish name here" required/>
                <input onChange={(e) =>setTime(e.target.value)} value={time} type="time" step='1' required/>
                <select onChange={(e) =>setInfo(e.target.value)} value={information} required>
                    <option value=''>None</option>
                    <option value='pizza'>Pizza</option>
                    <option value='soup'>Soup</option>
                    <option value='sandwich'>Sandwich</option>
                </select>
                {information === 'pizza'  ? (
                    <div>
                    <input type='number' placeholder='enter number of slices'/>
                    <input type='number' step='0.01' placeholder='enter diameter'/>
                    </div>
                    
                ) : information === 'soup' ? (
                    <div>
                    <select id='spicy_scale'>
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
                ): information === 'sandwich' ? (
                    <div>
                        <input type='number' required/>
                    </div>
                ) :( null )}
                        
                <button>Submit</button>
            </form>
        </>
    )
}

export {SelectDishForm as default};

// {this.value === 'pizza' || this.value === 'sandwhich' ? (
//         <intput type='number'/>
//     ) : (
//         <select id='spicy_scale'>
//             <option value='1'>1</option>
//             <option value='2'>2</option>
//             <option value='3'>3</option>
//             <option value='4'>4</option>
//             <option value='5'>5</option>
//             <option value='6'>6</option>
//             <option value='7'>7</option>
//             <option value='8'>8</option>
//             <option value='9'>9</option>
//             <option value='10'>10</option>
//         </select>
//     )}
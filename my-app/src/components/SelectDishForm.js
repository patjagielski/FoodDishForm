import React, {useState, useContext} from 'react';
import DishContext from '../context/dish-context';
import axios from 'axios';


const SelectDishForm = () =>{
    const {dispatch} = useContext(DishContext);
    const [name, setName] = useState(''); 
    const [type, setInfo] = useState('');
    const [preparation_time, setTime] = useState('');
    const [no_of_slices, setPizzaSlices] = useState('');
    const [diameter, setDiameter] = useState('');
    const [spiciness_scale, setSpice] = useState('');
    const [slices_of_bread, setBread] = useState('');

   const onSliceChange= (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^[0-9]/)) {
            setPizzaSlices(e.target.value)
        }
    };

    const onDiameterChange= (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/[+-]?([0-9]*[.])?[0-9]+/)) {
            setDiameter(e.target.value)
        }
    };

    const handleRequest = (e) => {
        e.preventDefault();
        let body ={
            name,
            preparation_time,
            type,
            no_of_slices: parseInt(no_of_slices),
            diameter:  parseFloat(diameter),
            spiciness_scale: parseInt(spiciness_scale),
            slices_of_bread: parseInt(slices_of_bread)
        }
        axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', body)
            .then(function(res){
                const response = [{...res.data}]
                addDish(response);
            })
            .catch(function(err){
                console.log(err);
                alert('Order was deleted due to incomplete form.');
            });
            setName('');
            setInfo('');
            setTime('');
            if(type === 'pizza'){
                setPizzaSlices('');
                setDiameter('');
            }else if(type === 'soup'){
                setSpice('');
            }else{
                setBread('');
            }
    }

   function addDish(response){
        dispatch({
            set: 'SEND_REQUEST',
            id: response[0].id,
            name: response[0].name,
            preparation_time: response[0].preparation_time,
            type: response[0].type,
            no_of_slices: response[0].no_of_slices,
            diameter:  response[0].diameter,
            spiciness_scale: response[0].spiciness_scale,
            slices_of_bread: response[0].slices_of_bread
        });
      }

    return(
        <div>
            <div className="container">
                <h3 className="container__title">Order Down Below!</h3>
            </div>
            <form className="add-dish" onSubmit={handleRequest}>
                <textarea className="add-dish__input" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter Dish name here" required/>
                <input className="prep-time" onChange={(e) =>setTime(e.target.value)} value={preparation_time} type="time" step="1" required/>
                <div className="custom-option">
                <select onChange={(e) =>setInfo(e.target.value)} value={type} required>
                    <option value=''>None</option>
                    <option value='pizza'>Pizza</option>
                    <option value='soup'>Soup</option>
                    <option value='sandwich'>Sandwich</option>
                </select>
                </div>
                {type === 'pizza'  ? (
                    
                    <div className="container--pizza">
                        <input className="add-dish__input--pizza" type='number' placeholder='enter number of slices' value={no_of_slices} onChange={onSliceChange}/>
                        <input className="add-dish__input--pizza" type='number' step='0.01' placeholder='enter diameter' value={diameter} onChange={onDiameterChange}/>
                    </div>
                    
                ) : type === 'soup' ? (
                    <div className="custom-option">
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
                    <div className="container--soup">
                        <input className="add-dish__input--soup" type='number' value={slices_of_bread} placeholder="No. Slices of Bread" onChange={(e) =>setBread(e.target.value)} required/>
                    </div>
                ) :( null )}
                        
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export {SelectDishForm as default};
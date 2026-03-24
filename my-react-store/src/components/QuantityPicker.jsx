import "./QuantityPicker.css";
import {useState} from "react";

function QuantityPicker(props){

    const [quantity, setQuantity] = useState(1);
    //    name   funtion initial value
    // let quantity = 1;
    // let 
    // quatity = 2; // this won't wok in React
    // we need to ude setQuatity to update the value

    function handleIncrease(){
        let temporalValue = quantity +  1;
        setQuantity(temporalValue);
        props.onChange(temporalValue);
    }
    function handleDecrease(){
        let temporalValue = quantity - 1;
        if(temporalValue === 0){
            return;
        }
        setQuantity(temporalValue);
        props.onChange(temporalValue);
    }
    // create the handleDecrease funtion and
    //prevent the quantity from goin below 1
    //disable the button

    return(
        <div className="quantity-picker">
            <button onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}
export default QuantityPicker;
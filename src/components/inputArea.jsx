import React, {useState} from "react";

const InputArea = (props) => {
    const [InputText, setInputText] = useState('');
    const handleChange = (event) =>{
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return(
        <div className = 'form'>
            <input type = "text" onChange = {handleChange} value = {InputText}></input>
            <button onClick = { () =>{
                props.onAdd(InputText);
                setInputText("");
            }}> 
            <span>Add</span></button>
        </div>

        
    )
}

export { InputArea };
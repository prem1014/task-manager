import React from 'react';

interface IInputProps {
    type: string;
    changed(event: any): any;
    placeholder?: string;
    value: string;
    className?: string
}

const Input: React.FC<IInputProps> = (props) => {
    return (
        <input 
            type={props.type}
            onChange={props.changed}
            placeholder={props.placeholder}
            value={props.value}
            className={props.className ? props.className : 'form-control'}
        />
    )
}

export default Input;
import React from 'react';

interface IInputProps {
    type: string;
    changed(event: any): any;
    placeholder?: string;
    value: string;
    className?: string
}

const Input: React.FC<IInputProps> = (props) => {
    let input = null;
    switch(props.type) {
        case 'textarea':
            input = <textarea
                onChange={props.changed}
                placeholder={props.placeholder}
                value={props.value}
                className={props.className ? props.className : 'form-control'}
            ></textarea>
            break;
        default:
            input = <input
            type={props.type}
            onChange={props.changed}
            placeholder={props.placeholder}
            value={props.value}
            className={props.className ? props.className : 'form-control'}
        />
        break;
    }

    return (
        <>{input}</>
    )
}

export default Input;
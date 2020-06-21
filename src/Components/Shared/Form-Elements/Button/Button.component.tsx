import React from 'react';

interface IButtonProps {
    children: any;
    clicked(event: any): any
    type: any
    cssClassName?: string;
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <button
            className={props.cssClassName ? props.cssClassName : 'btn'}
            type={props.type}
            onClick={props.clicked}
            disabled={props.disabled}
        >{props.children}</button>
    )
}

export default Button;
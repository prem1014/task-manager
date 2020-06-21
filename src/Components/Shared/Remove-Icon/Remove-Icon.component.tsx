import React from 'react';

interface IRemoveIconProps {
    title?: string;
    remove: any;
}
const RemoveIcon: React.FC<IRemoveIconProps> = (props: IRemoveIconProps) => {
    return (
        <span className="close-icon" onClick={props.remove} title={props.title}>
            <i className="fas fa-trash-alt"></i>
        </span>
    )
}

export default RemoveIcon;
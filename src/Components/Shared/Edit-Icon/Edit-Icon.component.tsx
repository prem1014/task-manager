import React from 'react';

interface IEditIconProps {
    title?: string;
    edit: any;
}
const EditIcon: React.FC<IEditIconProps> = (props: IEditIconProps) => {
    return (
        <span className="edit-icon" onClick={props.edit} title={props.title}>
            <i className="fas fa-pencil-alt"></i>
        </span>
    )
}

export default EditIcon;
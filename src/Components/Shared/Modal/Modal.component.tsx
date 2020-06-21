import React from 'react';

import './Modal.component.scss';

interface IModalProps {
    title: string;
    children: any;
    width?: string;
    close?(): any;
}

const AppModal: React.FC<IModalProps> = (props: IModalProps) => {
    const close = () => {
        props.close && props.close();
    }
    return (
        <React.Fragment>
            <div id="myModal" className="app-modal">
                <div className="app-modal-content" style={{width: props.width}}>
                    <div className="modal-header">
                        <h5>{props.title}</h5>
                        <span className="close-icon" onClick={() => close()}><i className="fas fa-times-circle"></i></span>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>

            </div >
        </React.Fragment >
    )
}

export default AppModal;
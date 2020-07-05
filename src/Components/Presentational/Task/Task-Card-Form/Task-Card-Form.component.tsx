import React, { useState } from 'react';

import Input from '../../../Shared/Form-Elements/Input/Input.component';
import Button from '../../../Shared/Form-Elements/Button/Button.component';

interface ITaskCardFormProps {
    taskCardCreated(name: string): any;
    cardName?: string;
    taskCardUpdated(name: string): any;
}

const TaskCardForm: React.FC<ITaskCardFormProps> = (props: ITaskCardFormProps) => {

    const [cardName, setCardName] = useState(props.cardName || '');

    const inputChangedHandler = (e: any) => {
        setCardName(e.target.value);
    }

    const saveCardName = (e: any) => {
        if(props.cardName) {
            props.taskCardUpdated && props.taskCardUpdated(cardName);
            return;
        }
        props.taskCardCreated && props.taskCardCreated(cardName);
    }

    return (
        <React.Fragment>
            <div className="task-form margin-top-20px">
                <form>
                    <div className="row margin-top-bottom-10px">
                        <div className="col-lg-3 col-md-3 col-12"></div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <Input
                                type="textarea"
                                placeholder="Enter list name"
                                value={cardName}
                                changed={(event) => inputChangedHandler(event)}
                            />
                        </div>
                        <div className="col-lg-3 col-md-3 col-12"></div>
                    </div>
                    <hr />
                    <div className="row margin-top-bottom-10px">
                        <div className="col-12">
                            <h6 className="text-center">
                                <Button
                                    cssClassName="btn btn-success"
                                    type="submit"
                                    clicked={(event) => saveCardName(event)}
                                    disabled={!cardName}
                                >{props.cardName ? 'Update Card' : 'Save Card'}</Button>
                            </h6>
                        </div>
                    </div>
                </form>
            </div>

        </React.Fragment>
    )
}

export default TaskCardForm;
import React, { useState } from 'react';

import Input from '../../../Shared/Form-Elements/Input/Input.component';
import Button from '../../../Shared/Form-Elements/Button/Button.component';

interface ITaskFormProps {
    taskListNameCreated(name: string): any;
}

const TaskForm: React.FC<ITaskFormProps> = (props: ITaskFormProps) => {

    const [taskListName, setTaskListName] = useState('');

    const inputChangedHandler = (e: any) => {
        setTaskListName(e.target.value);
    }

    const saveTaskListName = (e: any) => {
        props.taskListNameCreated && props.taskListNameCreated(taskListName);
    }

    return (
        <React.Fragment>
            <div className="task-form margin-top-20px">
                <form>
                    <div className="row margin-top-bottom-10px">
                        <div className="col-lg-3 col-md-3 col-12"></div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <Input
                                type="text"
                                placeholder="Enter list name"
                                value={taskListName}
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
                                    clicked={(event) => saveTaskListName(event)}
                                    disabled={!taskListName}
                                >Save List</Button>
                            </h6>
                        </div>
                    </div>
                </form>
            </div>

        </React.Fragment>
    )
}

export default TaskForm;
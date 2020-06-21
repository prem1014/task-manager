import React, { useState } from 'react';

import './TaskList.component.scss';
import Button from '../../../Shared/Form-Elements/Button/Button.component';
import AppModal from '../../../Shared/Modal/Modal.component';
import TaskCardForm from '../Task-Card-Form/Task-Card-Form.component';
import RemoveIcon from '../../../Shared/Remove-Icon/Remove-Icon.component';

interface ITaskListProps {
    taskListId: number;
    name: string;
    taskCard: any;
    taskCardCreated(taskListId: number, cardName: string): any
    onTaskCardDropped(draggedFromtaskListId: number, cardId: number, draggedToTaskListId: number): any;
    removeTask(taskListId: number): any;
    removeTaskCard(taskListId: number, cardId: number): any;
}

const TaskList: React.FC<ITaskListProps> = (props) => {

    const [enableCardAdd, setEnableCardAdd] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [taskListIdToBeRemoved, setTaskListIdToBeRemoved] = useState(0);
    const [cardIdToBeRemoved, setCardIdToBeRemoved] = useState(0);

    const addTaskCard = (e: any) => {
        setEnableCardAdd(true)
    }

    const taskCardCreated = (cardName: string, taskListId: number) => {
        props.taskCardCreated && props.taskCardCreated(taskListId, cardName);
        setEnableCardAdd(false);
    }

    const taskCardDragStart = (e: any, taskListId: number, cardId: number) => {
        e.dataTransfer.setData('taskListId', taskListId);
        e.dataTransfer.setData('cardId', cardId);
    }

    const onTaskDrop = (e: any, draggedTotaskListId: number) => {
        e.preventDefault();
        const dataTransferObj = e.dataTransfer;
        props.onTaskCardDropped && props.onTaskCardDropped(
            Number(dataTransferObj.getData('taskListId')),
            Number(dataTransferObj.getData('cardId')),
            draggedTotaskListId);
    }

    const taskCardDragOver = (e: any) => {
        e.preventDefault();
    }

    const appModalClose = () => {
        setEnableCardAdd(false);
        setShowConfirmation(false);
    }

    const removeTask = (taskListId: number) => {
        setShowConfirmation(true);
        setTaskListIdToBeRemoved(taskListId);
        setCardIdToBeRemoved(0);
    }

    const removeTaskCard = (taskListId: number, cardId: number) => {
        setShowConfirmation(true);
        setTaskListIdToBeRemoved(taskListId);
        setCardIdToBeRemoved(cardId);
    }

    const onConfirmatonOk = () => {
        setShowConfirmation(false);
        if(taskListIdToBeRemoved && cardIdToBeRemoved) {
            props.removeTaskCard && props.removeTaskCard(taskListIdToBeRemoved, cardIdToBeRemoved);
        } else if(taskListIdToBeRemoved && !cardIdToBeRemoved) {
            props.removeTask && props.removeTask(taskListIdToBeRemoved);
        }
    }

    const onConfirmatonNo = () => {
        setShowConfirmation(false);
    }

    return (
        <React.Fragment>
            <div className="task-list" onDrop={(event) => onTaskDrop(event, props.taskListId)} onDragOver={(event) => taskCardDragOver(event)}>
                <h5>{props.name}</h5>
                <RemoveIcon remove={() => removeTask(props.taskListId)} title="Remove this task"/>
                <hr />
                {
                    props.taskCard && props.taskCard.length > 0 && props.taskCard.map((card: any) => (
                        <div className="row margin-top-bottom-10px"
                            key={card.id}
                            draggable="true" onDragStart={(event) => taskCardDragStart(event, props.taskListId, card.id)}
                        >
                            <div className="col-12">
                                <div className="task-card">
                                    <div>
                                        <RemoveIcon remove={() => removeTaskCard(props.taskListId, card.id)} title="Remove this task card"/>
                                    </div>
                                    <p>{card.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <Button
                    clicked={(event) => addTaskCard(event)}
                    cssClassName="btn"
                    type="button"
                >
                    <span><i className="fas fa-plus"></i> Add a card</span>
                </Button>
            </div>
            {
                enableCardAdd &&
                <AppModal title="Create Card" width="40%" close={() => appModalClose()}>
                    <TaskCardForm
                        taskCardCreated={(cardName) => taskCardCreated(cardName, props.taskListId)}
                    />
                </AppModal>
            }
            {
                showConfirmation &&
                <AppModal title="Are your sure ?" width="30%" close={() => appModalClose()}>
                    <div className="row margin-top-20px">
                        <div className="col-12">
                            <h6 className="text-center">
                                <Button
                                    cssClassName="btn btn-info"
                                    type="button"
                                    clicked={() => onConfirmatonOk()}
                                >Yes</Button>
                                <Button
                                    type="button"
                                    clicked={() => onConfirmatonNo()}
                                >No</Button>
                            </h6>
                        </div>
                    </div>
                </AppModal>
            }
        </React.Fragment>
    )
}

export default TaskList;
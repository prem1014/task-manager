import React, { Component } from 'react';
import TaskList from './TaskList/TaskList.component';

import AppModal from '../../Shared/Modal/Modal.component';
import TaskForm from './Task-Form/Task-Form.component';
import Button from '../../Shared/Form-Elements/Button/Button.component';
import * as Utility from '../../Shared/Utility/utility';

interface ICard {
    name: string;
    id: number;
}

interface task {
    id: number;
    name: string;
    taskCard?: Array<ICard>
}

interface ITaskState {
    tasks: Array<task>;
    enableTaskAdd: boolean;
    listName: string
}

class Task extends Component<any, ITaskState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [],
            enableTaskAdd: false,
            listName: ''
        }
    }

    componentDidMount() {
        if(!Utility.isEmpty(Utility.getTasks())) {
            this.setState({ tasks: Utility.getTasks()})
        }
    }

    componentDidUpdate() {
        Utility.saveTask(this.state.tasks);
    }

    /* open modal pop up to add task */
    addTask = (e: any) => {
        this.setState({ enableTaskAdd: true });
    }

    /* save the task name to task list array */
    saveList = (taskListName: string) => {
        let updatedState = { ...this.state };
        updatedState.tasks.push({ name: taskListName, id: Utility.generateId()});
        updatedState.enableTaskAdd = false;
        this.setState(updatedState);
    }

    /* be called when task card created and pushed the task card to respective task list */
    taskCardCreated = (taskListId: number, cardName: string) => {
        let updatedState = { ...this.state };
        
        let taskIndex = updatedState.tasks.findIndex( item => item.id === taskListId);
        if(taskIndex !== -1) {
            if(updatedState.tasks[taskIndex].taskCard) {
                updatedState.tasks[taskIndex].taskCard?.push({name: cardName, id: Utility.generateId()});
            } else {
                updatedState.tasks[taskIndex].taskCard = [{name: cardName, id: Utility.generateId()}];
            }
            this.setState(updatedState);
        }
    }

    /* will be called when a task card is dragged and droppped */
    onTaskCardDropped = (taskListId: number, cardId: number, draggedTotaskListId: number, droppingItemId: number) => {
        let updatedState = { ...this.state };

        const indexOfTaskFromCardDragged: any = updatedState.tasks.findIndex( task => task.id === taskListId);
        const indexOfCardToBeDragged: any = updatedState.tasks[indexOfTaskFromCardDragged].taskCard?.findIndex( (card: any) => card.id === cardId);
        
        const cardToBeDragged: any = updatedState.tasks[indexOfTaskFromCardDragged].taskCard?.find( card => card.id === cardId);

        const indexOfCardDraggedToTask = updatedState.tasks.findIndex( task => task.id === draggedTotaskListId);
        let taskCard: any = updatedState.tasks[indexOfCardDraggedToTask].taskCard;
        if(taskCard && taskCard.length > 0) {
            const droppingItemIndex = taskCard.findIndex( (card: any) => card.id === droppingItemId);
            const itemToBeReplaced = taskCard[droppingItemIndex];
            if(taskListId === draggedTotaskListId) {
                if(droppingItemIndex < indexOfCardToBeDragged) {
                    const card1 = taskCard.slice(0, droppingItemIndex);
                    card1[card1.length] = cardToBeDragged;
                    const elementToBeMoved = taskCard.slice(droppingItemIndex, taskCard.length);
                    elementToBeMoved.splice(indexOfCardToBeDragged - droppingItemIndex, 1);
                    taskCard = card1.concat(elementToBeMoved);
                } else {
                    if(droppingItemIndex + 1 === taskCard.length) {
                        taskCard[droppingItemIndex] = cardToBeDragged;
                        taskCard[indexOfCardToBeDragged] = itemToBeReplaced;
                    } else {
                        let card1 = taskCard.slice(droppingItemIndex + 1, taskCard.length);
                        card1.unshift(cardToBeDragged);
                        const elementToBeMoved = taskCard.slice(0, droppingItemIndex + 1);
                        elementToBeMoved.splice(indexOfCardToBeDragged, 1);
                        taskCard = elementToBeMoved.concat(card1);
                    }
                }
            } else {
                const card1 = taskCard.slice(0, droppingItemIndex);
                card1[card1.length] = cardToBeDragged;
                const elementToBeMoved = taskCard.slice(droppingItemIndex, taskCard.length);
                taskCard = card1.concat(elementToBeMoved);
            }
        } else {
            taskCard = [cardToBeDragged];
        }
        updatedState.tasks[indexOfCardDraggedToTask].taskCard = taskCard;
        if(taskListId !== draggedTotaskListId) {
            updatedState.tasks[indexOfTaskFromCardDragged].taskCard?.splice(indexOfCardToBeDragged, 1);
        }
        this.setState(updatedState);
    }

    removeTask = (taskListId: number) => {
        let updatedState = { ...this.state };
        updatedState.tasks.splice(updatedState.tasks.findIndex( task => task.id === taskListId), 1);
        this.setState(updatedState);
    }

    removeTaskCard = (taskListId: number, cardId: number) => {
        let updatedState = { ...this.state };
        const taskIndex = updatedState.tasks.findIndex( task => task.id === taskListId);
        let taskCard = updatedState.tasks[taskIndex].taskCard;
        taskCard?.splice(taskCard.findIndex( card => card.id === cardId), 1);
        updatedState.tasks[taskIndex].taskCard = taskCard;
        this.setState(updatedState);
    }

    appModalClose = () => {
        this.setState({enableTaskAdd: false});
    }

    taskCardUpdated = (taskId: number, cardId: number, cardName: string) => {
        let updatedState = { ...this.state };
        updatedState.tasks = updatedState.tasks.map( task => {
            if(task.id === taskId) {
                task.taskCard = task.taskCard?.map( card => {
                    if(card.id === cardId) {
                        card.name = cardName;
                    }
                    return card;
                });
            }
            return task;
        });

        this.setState(updatedState);
    }

    render() {
        const { tasks, enableTaskAdd } = this.state;
        return (
            <React.Fragment>
                <div className="row margin-top-20px">
                    {
                        tasks.length > 0 && tasks.map(list => (
                            <div className="col-3" key={list.id}>
                                <TaskList
                                    name={list.name}
                                    taskListId={list.id}
                                    taskCard={list.taskCard}
                                    removeTask={(taskListId: number) => this.removeTask(taskListId)}
                                    removeTaskCard={(taskListId: number, cardId: number) => this.removeTaskCard(taskListId, cardId)}
                                    taskCardCreated={(taskListId: number, cardName: string) => this.taskCardCreated(taskListId, cardName)}
                                    taskCardUpdated={(taskId: number, cardId: number, cardName: string) => this.taskCardUpdated(taskId, cardId, cardName)}
                                    onTaskCardDropped={(taskListId: number, cardId: number, draggedTotaskListId: number, droppingIndex: number) => this.onTaskCardDropped(taskListId, cardId, draggedTotaskListId, droppingIndex)}
                                />
                            </div>
                        ))
                    }
                    {
                        !enableTaskAdd &&
                        <div className="col-3">
                            <Button
                                cssClassName="btn"
                                type="button"
                                clicked={(event) => this.addTask(event)}
                            >
                                <span><i className="fas fa-plus"></i> {tasks.length === 0 ? 'Add your first list' : 'Add another list'}</span>
                            </Button>
                        </div>
                    }
                    {
                        enableTaskAdd &&
                        <React.Fragment>
                            <AppModal title="Create Task" width="40%" close={() => this.appModalClose()}>
                                <TaskForm taskListNameCreated={this.saveList} />
                            </AppModal>
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Task;
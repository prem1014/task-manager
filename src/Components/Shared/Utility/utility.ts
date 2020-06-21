
export const generateId = () => {
    return new Date().getTime()
}

export const saveTask = (tasks: any) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks') || '{}');
}

export const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
}

export type CardProps = {
    title: string,
    taskExisting: string,
    cardId: number,
}

export type TaskType = {
    changeTodo: (id: number) => void,
    item: Tasks,
    tasksFilter: (id: number) => void,
}

export type Tasks = {

    text: string,
    id: number,
    isCompleted: boolean,

}

export type ModuleProps = {
    setIsModule: React.Dispatch<React.SetStateAction<boolean>>,
    isModule: boolean,
}

export type NotificationType = {
    tasks: Tasks[],
    tasksDone: number,
    title: string,
}
import './Task.scss'
import Trash from '../../assets/filled-trash.png'
import { FC } from 'react'
import { TaskType } from '../../types/types'
const Task: FC<TaskType> = ({ changeTodo, item, tasksFilter }) => {
    return (
        <div className={item.isCompleted ? 'task-item done' : 'task-item'} key={item.id}  >
            <div className='task-item-text' onClick={() => changeTodo(item.id)}>
                <p >{item.text}</p>
            </div>
            <img
                src={Trash}
                alt='remove-image'
                className='remove-image'
                onClick={() => tasksFilter(item.id)}
            />
        </div>
    )
}

export default Task
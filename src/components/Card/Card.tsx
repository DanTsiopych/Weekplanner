import { FC, useEffect, useState } from 'react'
import './Card.scss';
import ModalError from '../ModalError/ModalError'
import Task from '../Task/Task';
import Notification from '../Notification/Notification';
import useLocalStorage from '../../hooks/useLocalStorage';
import Plus from '../../assets/plus.png'
import { CardProps } from '../../types/types';
import { Tasks } from '../../types/types';


export const Card: FC<CardProps> = ({ title, taskExisting, cardId }) => {

    const [inputValue, setInputValue] = useState('')
    const [isModule, setIsModule] = useState(false);
    const [tasksDone, setTasksDone] = useState(0)
    const [tasks, setTasks] = useLocalStorage(`${cardId}`, [])

    const percent = Math.floor(100 / tasks.length * tasksDone);


    useEffect(() => {
        let count = 0;
        if (tasks.length > 0) {
            tasks.forEach((todo) => {
                if (todo.isCompleted) {
                    count += 1;
                }
            });
            setTasksDone(count);
        }
    }, [tasks, tasksDone])


    function changeTodo(id: number) {
        const copy = [...tasks];
        const current = copy.find((todo) => todo.id === id);
        if (typeof current === 'undefined') return null
        current.isCompleted = !current.isCompleted;
        setTasks(copy);
    }

    function addNewTask() {
        const newTask = {
            text: inputValue,
            id: 1 * Math.random(),
            isCompleted: false,
        }

        setTasks([newTask, ...tasks]);
        setInputValue('')
    }

    function tasksFilter(id: number) {
        const updatedTodos = tasks.filter((todo) => todo.id !== id);
        setTasks(updatedTodos);
    }

    function resetAll() {
        return setTasks([]);
    }


    return (
        <div className='card'>
            <Notification tasks={tasks} tasksDone={tasksDone} title={title} />
            {<ModalError isModule={isModule} setIsModule={setIsModule} />}
            <h4 className='card-title'>{title}</h4>
            <input
                type='text'
                className='tasks'
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
                value={inputValue}
            />
            <button
                className='addButton'
                onClick={() => {
                    inputValue === '' ? setIsModule(true) : addNewTask()
                }}>
                <img src={Plus} alt='plus-image' />
                <span>ADD</span>
            </button>
            {!tasks.length ? <p className='taskExisting'>{taskExisting}</p> :

                <div className='listOfTasks'>

                    {tasks.map((item: Tasks) => (
                        <Task changeTodo={changeTodo} item={item} tasksFilter={tasksFilter} key={item.id} />
                    ))}
                    <div className='tasksFeatures'>
                        <button className='resetAll' onClick={() => resetAll()}>Reset All</button>
                        <div className='tasksProgress'>
                            <span>{tasksDone} / {tasks.length}</span>
                            <span>{percent} %</span>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}


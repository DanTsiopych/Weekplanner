import {useState, useEffect, FC} from 'react'
import './Notification.scss'
import Bell from '../../assets/bell.png'
import { NotificationType } from '../../types/types'

const Notification: FC<NotificationType> = ({tasks, tasksDone, title}) => {

    const [notification, setNotification] = useState(false)

    useEffect(() => {
        if (tasks.length > 0) {
            if (tasks.length === tasksDone) {
                setNotification(true);

                // Set a timeout to turn off the notification after 3 seconds
                const timer = setTimeout(() => {
                    setNotification(false);
                }, 3000);

                // Clean up the timeout if the component unmounts or if tasksDone changes before the timeout completes
                return () => clearTimeout(timer);
            }
            else {
                setNotification(false);
            }
        } else {
            setNotification(false);
        }
    }, [tasksDone, tasks]);

    return (
        <div className={notification ? 'notification' : 'notification disabled'}>
            <img src={Bell} className='bell-img' alt='bell' />
            <div className='notification-text'>
                <h3>You've done all your tasks for {title}</h3>
                <p>Keep it up</p>
            </div>
        </div>
    )
}

export default Notification
import './Cards.scss'
import { Card } from '../Card/Card'

function Cards() {
    return (
        <div className='cards'>
            <Card title='Monday' taskExisting='No tasks for Monday' cardId={1}/>
            <Card title='Tuesday' taskExisting='No tasks for Tuesday' cardId={2}/>
            <Card title='Wednesday' taskExisting='No tasks for Wednesday' cardId={3}/>
            <Card title='Thursday' taskExisting='No tasks for Thursday' cardId={4}/>
            <Card title='Friday' taskExisting='No tasks for Friday' cardId={5}/>
            <Card title='Saturday' taskExisting='No tasks for Saturday' cardId={6}/>
            <Card title='Sunday' taskExisting='No tasks for Sunday' cardId={7}/>
            <Card title='Notes' taskExisting='No Notes' cardId={8}/>
        </div>
    )
}

export default Cards
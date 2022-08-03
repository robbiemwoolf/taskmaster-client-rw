export default function TaskLayout({task}) {
    return (
        <ul className='pt-3'>
            <li>
                <label className='form-check-label task' htmlFor='checktask'>
                <input className='form-check-input checkbox mx-2' type='checkbox' id='checktask'/>
                    {task}
                </label>
            </li>
        </ul>
    )
}
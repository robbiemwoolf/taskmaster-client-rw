import { useEffect, useState } from "react"
import '../../App.css'
import PopUp from "./PopUp"
import TaskLayout from "./TaskLayout"

const url = process.env.REACT_APP_API_BASE_URL

export default function Tasklist({path}) {
    const [tasks, setTasks] = useState([])
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        fetch(`${url}${path}`)
            .then((response) => response.json())
            .then((results) => {
                const arrData = Object.values(results)
                let tasks = []
                for (let task of arrData) {                    
                    for (let i=0; i<=arrData.length; i++) {
                        tasks.push(task[i].task_description)
                    }                    
                }    
                setTasks(tasks)
            })
    }, [path])

    const tasklist = tasks.map((task) => {
        return (
        <TaskLayout task={task}/>
        )
    })

    if (tasks.length === 0) {
        return (
            <>
                <div className='text-center  metalfont'>
                    <button className="btn btn-secondary mt-5" onClick={() => setModalShow(true)}>
                        Add Tasks
                    </button>
                </div>

                <PopUp
                    show={modalShow}
                    tasks={tasks}
                    setTasks={setTasks}
                    setModalShow={setModalShow}
                />
            </>
        )
    } else {
        return (
            <div className='pt-3'>
                {tasklist}
            </div>
        )
    }
}
import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Dailies() {
    const title = 'Daily Smashed'
    const path = '/daily'
    
    return (
        <>
        <Tasklist path={path} />
        <Line />
        <Archived path={path} title={title}/>
        </>
    )
}
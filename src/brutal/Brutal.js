import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function Brutal() {
    const title = 'Brutally Smashed'
    const path = '/brutal'

    return (
        <>
        <Tasklist path={path}/>
        <Line />
        <Archived path={path} title={title} />
        </>
    )
}
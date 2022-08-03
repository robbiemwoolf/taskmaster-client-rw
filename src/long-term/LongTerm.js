import Tasklist from "../utils/tasklist/Tasklist"
import Line from "../utils/hr/Line"
import Archived from "../utils/archived/Archived"

export default function LongTerm() {
    const title = 'long term smashed'
    const path = '/longterm'

    return (
        <>
        <Tasklist path={path} />
        <Line />
        <Archived path={path} title={title}/>
        </>
    )
}
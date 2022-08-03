import './Header.css'

export default function Header() {
    return (
        <>
        <header className='d-flex flex-column metal text-center'>
            <div className="d-flex"><h1 className='flex-fill skulls'>Taskmaster</h1></div>
            <div className='d-flex navbar metalfont p-0 flex-fill'> 
                <form className='d-flex flex-nowrap form-inline flex-fill'>
                    <button type='button' className='flex-fill btn btn-secondary btn-block nav-item col'><a className='nav-link' href='/' >Brutal</a></button>
                    <button type='button' className='flex-fill btn btn-secondary btn-block nav-item col'><a className='nav-link' href='/dailies' >DaIlIes</a></button>
                    <button type='button' className='flex-fill btn btn-secondary btn-block nav-item col'><a className='nav-link' href='/longterm' >Long Term</a></button>
                    <button type='button' className='flex-fill btn btn-secondary btn-block nav-item col'><a className='nav-link' href='/streak' >Streak</a></button>
                </form>
            </div>
        </header>
        </>
    )
}
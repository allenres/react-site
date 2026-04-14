import './Header.css';

export default function Header({title}) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Things To See</a></li>
                </ul>
            </nav>
        </header>
    )
}
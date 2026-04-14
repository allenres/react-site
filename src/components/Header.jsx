import './Header.css';

export default function Header({title}) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#History Facts">History</a></li>
                    <li><a href="#Things to See">Things To See</a></li>
                </ul>
            </nav>
        </header>
    )
}
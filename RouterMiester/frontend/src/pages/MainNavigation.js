import { Link } from 'react-router-dom';

export default function MainNavigation() {
    return (
        <nav className="main-navigation">
            <ul className="main-navigation__list">
                <li className="main-navigation__item">
                    <Link to="/" className="main-navigation__link">Home</Link>
                </li>
                <li className="main-navigation__item">
                    <Link to="/events" className="main-navigation__link">Events</Link>
                </li>
                <li className="main-navigation__item">
                    <Link to="/events/new" className="main-navigation__link">New Events</Link>
                </li>
            </ul>
        </nav>
    );
}
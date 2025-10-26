import { NavLink } from 'react-router-dom';

export default function EventsNavigation() {
    return (
        <header className="events-nav">
            <nav>
                <ul className="events-list">
                    <li>
                        {/* Use NavLink for active styling */}
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                isActive ? "link-item active" : "link-item"
                            }
                            end
                        >
                            All Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/events/new"
                            className={({ isActive }) =>
                                isActive ? "link-item active" : "link-item"
                            }
                        >
                            New Event
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
const FAKE_EVENTS = [
    { id: 'e1', title: 'Event One', description: 'This is the first event' },
    { id: 'e2', title: 'Event Two', description: 'This is the second event' },
    { id: 'e3', title: 'Event Three', description: 'This is the third event' },
    { id: 'e4', title: 'Event Four', description: 'This is the fourth event' },
];


export default function EventsPage() {
    return (
        <div className="events-page">
            <h1 className="events-page__title">All Events</h1>

            <section className="events-list">
                <h2 className="events-list__heading">Upcoming Events</h2>
                <ul className="events-list__container">
                    {/* Assuming FAKE_EVENTS is an array of objects */}
                    {FAKE_EVENTS.map(event => (
                        <li key={event.id} className="event-card">
                            <h3 className="event-card__title">{event.title}</h3>
                            <p className="event-card__description">{event.description}</p>
                            {/* You might add a link/button here too */}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
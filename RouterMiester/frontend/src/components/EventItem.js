import { Link, Form } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {

  const confirmDelete = (event) => {
    const proceed = window.confirm('Are you sure you want to delete this event?');
    if (!proceed) {
      event.preventDefault();
    }
  };

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>

        <Form method="delete" action={event.id}>
          <button type="submit" onClick={confirmDelete}>Delete</button>
        </Form>
      </menu>
    </article>
  );
}

export default EventItem;
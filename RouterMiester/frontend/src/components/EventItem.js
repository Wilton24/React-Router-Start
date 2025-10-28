import { Link } from 'react-router-dom';
import classes from './EventItem.module.css';
import { deleteEventAction } from '../api/actions';

function EventItem({ event }) {
  async function startDeleteHandler(id) {
    // ...
    await deleteEventAction(event.id);
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit" >Edit</Link>
        <button onClick={() => startDeleteHandler(event.id)}>Delete</button>
      </menu>
    </article>

  );
}

export default EventItem;

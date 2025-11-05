import { useNavigate, Form } from 'react-router-dom';
import classes from './EventForm.module.css';
import { redirect } from 'react-router-dom';

function EventForm({ event, method }) {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..');
  };


  const isSubmitting = navigate.state === 'submitting';

  async function eventAction({ request, params }) {
    const data = await request.formData();

    const submissionData = {
      title: data.get('title'),
      date: data.get('date'),
      description: data.get('description'),
    };

    const method = request.method;

    const response = await fetch('http://localhost:8080/events', {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error('Could not save event.');
    }

    return redirect('/events');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button"
          onClick={cancelHandler}
          disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
import { useNavigate, Form } from 'react-router-dom';
import classes from './EventForm.module.css';
import { redirect } from 'react-router-dom';

// Assume you pass a 'method' prop to specify POST or PATCH
function EventForm({ event, method }) {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..');
  };

  async function eventAction({ request, params }) {
    // 1a. Extract form data from the request object
    const data = await request.formData();

    // 1b. Create an object from the form data fields (using their 'name' attributes)
    const submissionData = {
      title: data.get('title'),
      date: data.get('date'),
      description: data.get('description'),
    };

    // 1c. Determine the HTTP method (React Router sets this based on <Form method>)
    const method = request.method;

    // 1d. Send the data to your backend API
    const response = await fetch('http://localhost:8080/events', {
      method: method, // POST, PATCH, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      // Handle server errors (e.g., status 400-599)
      throw new Error('Could not save event.');
    }

    // 1e. After success, use the redirect utility to navigate the user
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
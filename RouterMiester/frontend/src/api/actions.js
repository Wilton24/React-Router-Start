import { redirect } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8080';

export async function manipulateEventAction({ request, params }) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    };

    const method = request.method;
    let url = `${API_BASE_URL}/events`;

    if (method === 'PATCH') {
        const eventId = params.eventId;
        url = `${API_BASE_URL}/events/${eventId}`;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw new Error('Could not save event. Status: ' + response.status);
    }
    return redirect('/events');
}

export async function deleteEventAction({ params }) {
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Could not delete event. Status: ' + response.status);
    }
    return redirect('/events');
};
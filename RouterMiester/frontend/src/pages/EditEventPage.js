import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router";

export default function EditEventPage() {

    const eventData = useRouteLoaderData('event-detail');

    return <>
        <EventForm event={eventData.event} />
    </>;
}
import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {

    const { eventId } = useParams();

    return <>
        <EventForm eventId={eventId} />

    </>;
}
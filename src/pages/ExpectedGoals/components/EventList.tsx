import React from "react";
import { EventType } from "../types/Event";

const EventList: React.FC<{ events: EventType[] }> = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          Minuta: {event.minute} - Autor: {event.author} - xG:{" "}
          {event.value.toFixed(2)} - Opis: {event.description}
        </li>
      ))}
    </ul>
  );
};

export default EventList;

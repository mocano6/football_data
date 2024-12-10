// W ExpectedGoals.tsx

import React, { useState } from "react";
import EventList from "./components/EventList";
import Field from "./components/Field";
import { EventType } from "./types/Event";

const ExpectedGoalsApp: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);

  const handlePointSelected = (x: number, y: number) => {
    const newEvent: EventType = {
      id: Date.now(),
      x,
      y,
      minute: Math.floor(Math.random() * 90) + 1,
      author: "Player 1",
      value: Math.random(),
      description: "Opis wydarzenia",
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div>
      <h1>Oczekiwane Gole (xG)</h1>
      <Field events={events} onPointSelected={handlePointSelected} />
      <EventList events={events} />
    </div>
  );
};

export default ExpectedGoalsApp; // Używany domyślny eksport

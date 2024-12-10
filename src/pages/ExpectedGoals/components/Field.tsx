import React, { MouseEvent, useState } from "react";
import { EventType } from "../types/Event";
import fieldImage from "../../../assets/field.png";

type FieldProps = {
  onPointSelected: (x: number, y: number) => void;
  events: EventType[];
};

const Field: React.FC<FieldProps> = ({ onPointSelected, events }) => {
  const [localEvents, setLocalEvents] = useState<EventType[]>(events);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newEvent: EventType = {
      id: Date.now(),
      x,
      y,
      minute: Math.floor(Math.random() * 90) + 1,
      author: "Player 1",
      value: Math.random(),
      description: "Dodano wydarzenie na boisku", // Prosty przykład
    };

    setLocalEvents((prev) => [...prev, newEvent]);
    onPointSelected(x, y);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "600px",
        height: "400px",
        backgroundImage: `url(${fieldImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid green",
      }}
    >
      {localEvents.map((event) => (
        <div
          key={event.id}
          style={{
            position: "absolute",
            left: `${event.x}%`,
            top: `${event.y}%`,
            width: "12px",
            height: "12px",
            backgroundColor: "red",
            borderRadius: "50%",
            border: "2px solid white",
            transform: "translate(-50%, -50%)",
          }}
          title={`Minuta: ${event.minute}, Autor: ${
            event.author
          }, xG: ${event.value.toFixed(2)}`}
        ></div>
      ))}
    </div>
  );
};

export default Field;

import React, { useState } from "react";

type EventFormProps = {
  onSubmit: (data: { minute: number; author: string; xG: number }) => void;
};

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    minute: 0, // Typ number
    author: "", // Typ string
    xG: 0, // Typ number
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Sprawdź, czy pole jest typu number i przekonwertuj
    setFormState((prev) => ({
      ...prev,
      [name]: name === "minute" || name === "xG" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState); // Przekazujemy formState do funkcji onSubmit
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Minute:
        <input
          type="number"
          name="minute"
          value={formState.minute} // Sprawdź, czy to zawsze jest number
          onChange={handleChange} // Obsługuje zmiany
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formState.author}
          onChange={handleChange}
        />
      </label>
      <label>
        xG:
        <input
          type="number"
          name="xG"
          value={formState.xG} // Sprawdź, czy to zawsze jest number
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;

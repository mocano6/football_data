export type EventType = {
  id: number; // Unikalny identyfikator
  minute: number; // Minuta zdarzenia
  author: string; // Autor zdarzenia
  value: number; // Wartość xG
  description: string; // Typ zdarzenia (np. "strzał", "gol")
  x: number; // Pozycja x na boisku (0-100)
  y: number; // Pozycja y na boisku (0-100)
};

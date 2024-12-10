// src/types.ts

export interface Point {
  x: number;
  y: number;
}

export interface Arrow {
  start: Point;
  end: Point;
  color: string;
  minute: string;
  author: string;
}

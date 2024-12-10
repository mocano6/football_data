// src/components/CanvasComponent.tsx

import React, { useRef, useEffect, useCallback } from "react";
import { Point, Arrow } from "../types";

interface CanvasComponentProps {
  arrows: Arrow[];
  filteredArrows: Arrow[];
  drawStartPoint: (point: Point) => void;
  onCanvasClick: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  onMouseMove: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  isHovering: boolean;
  startPoint: Point | null; // Dodajemy prop startPoint
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({
  arrows,
  filteredArrows,
  drawStartPoint,
  onCanvasClick,
  onMouseMove,
  isHovering,
  startPoint, // Używamy prop startPoint
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawField = useCallback((ctx: CanvasRenderingContext2D) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    // Rysowanie linii boiska
    ctx.strokeRect(20, 20, width - 40, height - 40);
    ctx.beginPath();
    ctx.moveTo(width / 2, 20);
    ctx.lineTo(width / 2, height - 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeRect(20, height / 2 - 150, 150, 300);
    ctx.strokeRect(width - 170, height / 2 - 150, 150, 300);
    ctx.strokeRect(20, height / 2 - 80, 60, 160);
    ctx.strokeRect(width - 80, height / 2 - 80, 60, 160);

    // Rysowanie punktów karnych
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(125, height / 2, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width - 125, height / 2, 2, 0, 2 * Math.PI);
    ctx.fill();

    // Rysowanie łuków
    ctx.beginPath();
    ctx.arc(64, height / 2, 120, -Math.PI * 0.15, Math.PI * 0.15);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width - 64, height / 2, 120, Math.PI * 0.85, Math.PI * 1.15);
    ctx.stroke();

    // Rysowanie bramek
    ctx.strokeRect(10, height / 2 - 30, 10, 60);
    ctx.strokeRect(width - 20, height / 2 - 30, 10, 60);
  }, []);

  const drawArrow = useCallback((start: Point, end: Point, color: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    const headlen = 10;
    const angle = Math.atan2(end.y - start.y, end.x - start.x);
    ctx.beginPath();
    ctx.moveTo(end.x, end.y);
    ctx.lineTo(
      end.x - headlen * Math.cos(angle - Math.PI / 6),
      end.y - headlen * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      end.x - headlen * Math.cos(angle + Math.PI / 6),
      end.y - headlen * Math.sin(angle + Math.PI / 6)
    );
    ctx.lineTo(end.x, end.y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }, []);

  const drawArrows = useCallback(
    (arrowsToDraw: Arrow[]) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;

      arrowsToDraw.forEach((arrow) =>
        drawArrow(arrow.start, arrow.end, arrow.color)
      );
    },
    [drawArrow]
  );

  const clearCanvas = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        clearCanvas(ctx); // Czyszczenie canvasu przed rysowaniem
        drawField(ctx); // Rysowanie boiska
        drawArrows(filteredArrows); // Rysowanie strzałek

        // Rysowanie kropki, jeśli istnieje punkt startowy
        if (arrows.length > 0 && startPoint && !arrows[arrows.length - 1].end) {
          drawStartPoint(startPoint);
        }
      }
    }
  }, [
    arrows,
    filteredArrows,
    drawArrows,
    drawField,
    drawStartPoint,
    clearCanvas,
    startPoint,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={500}
      onClick={onCanvasClick}
      onMouseMove={onMouseMove}
      style={{
        border: "2px solid black",
        cursor: isHovering ? "pointer" : "crosshair",
      }}
    />
  );
};

export default CanvasComponent;

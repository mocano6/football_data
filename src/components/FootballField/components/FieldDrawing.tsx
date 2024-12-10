// src/components/FieldDrawing.tsx

import React, { useEffect } from "react";

interface FieldDrawingProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const FieldDrawing: React.FC<FieldDrawingProps> = ({ canvasRef }) => {
  useEffect(() => {
    const drawField = (ctx: CanvasRenderingContext2D) => {
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;

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

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(125, height / 2, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(width - 125, height / 2, 2, 0, 2 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(64, height / 2, 120, -Math.PI * 0.15, Math.PI * 0.15);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width - 64, height / 2, 120, Math.PI * 0.85, Math.PI * 1.15);
      ctx.stroke();

      ctx.strokeRect(10, height / 2 - 30, 10, 60);
      ctx.strokeRect(width - 20, height / 2 - 30, 10, 60);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawField(ctx);
      }
    }
  }, [canvasRef]);

  return null;
};

export default FieldDrawing;

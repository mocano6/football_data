// src/components/TooltipComponent.tsx

import React from "react";
import { Tooltip } from "@mui/material";
import { Arrow } from "../types";

interface TooltipComponentProps {
  tooltipVisible: boolean;
  tooltipInfo: {
    arrow: Arrow;
    x: number;
    y: number;
  } | null;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  tooltipVisible,
  tooltipInfo,
}) => {
  if (!tooltipVisible || !tooltipInfo) return null;

  return (
    <Tooltip
      title={
        <div>
          <strong>Minuta:</strong> {tooltipInfo.arrow.minute} <br />
          <strong>Rodzaj:</strong> {tooltipInfo.arrow.color} <br />
          <strong>Autor:</strong> {tooltipInfo.arrow.author}
        </div>
      }
      placement="top"
      open
      arrow
      disableFocusListener
      disableHoverListener
      disableTouchListener
    >
      <span
        style={{
          position: "absolute",
          left: tooltipInfo.x,
          top: tooltipInfo.y,
        }}
      />
    </Tooltip>
  );
};

export default TooltipComponent;

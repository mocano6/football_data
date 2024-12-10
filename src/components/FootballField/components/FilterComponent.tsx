// src/components/FilterComponent.tsx

import React from "react";
import { Typography, Slider } from "@mui/material";

interface FilterComponentProps {
  filterValue: number[];
  setFilterValue: React.Dispatch<React.SetStateAction<number[]>>;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterValue,
  setFilterValue,
}) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Typography gutterBottom>Filtruj według minuty:</Typography>
      <Slider
        value={filterValue}
        onChange={(e, newValue) => setFilterValue(newValue as number[])}
        valueLabelDisplay="auto"
        min={0}
        max={120}
        step={1}
        getAriaLabel={(value: number | number[]) =>
          Array.isArray(value)
            ? `Zakres: ${value[0]} do ${value[1]}`
            : `Wartość: ${value}`
        }
      />
    </div>
  );
};

export default FilterComponent;

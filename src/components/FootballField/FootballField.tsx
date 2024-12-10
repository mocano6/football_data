// src/FootballField.tsx

import React, { useState, useCallback, useMemo } from "react";
import CanvasComponent from "./components/CanvasComponent";
import ArrowDialog from "./components/ArrowDialog";
import TooltipComponent from "./components/TooltipComponent";
import FilterComponent from "./components/FilterComponent";
import PeopleList from "./components/PeopleList";
import CategoryFilter from "./components/CategoryFilter";
import { Point, Arrow } from "./types";

const categories = [
  { name: "Pass", color: "red" },
  { name: "Dribbling", color: "blue" },
  { name: "SFG", color: "green" },
  { name: "Regain", color: "#FFA500" }, // Zmieniony kolor na pomarańczowo-żółty
];

const FootballField: React.FC = () => {
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [endPoint, setEndPoint] = useState<Point | null>(null);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("Pass");
  const [minute, setMinute] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [tooltipInfo, setTooltipInfo] = useState<{
    arrow: Arrow;
    x: number;
    y: number;
  } | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<number[]>([0, 120]);

  const [people, setPeople] = useState<string[]>([]);
  const [newPerson, setNewPerson] = useState<string>("");

  const [activeAuthors, setActiveAuthors] = useState<Set<string>>(new Set());
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(categories.map((c) => c.name))
  );

  const drawStartPoint = useCallback((point: Point) => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
  }, []);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (!startPoint) {
      setStartPoint({ x, y }); // Ustawia punkt startowy
    } else {
      const newEndPoint = { x, y };
      setEndPoint(newEndPoint);
      setDialogOpen(true);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const hoveredArrow = arrows.find((arrow) =>
      isPointOnLine(x, y, arrow.start, arrow.end)
    );

    if (hoveredArrow) {
      setTooltipInfo({ arrow: hoveredArrow, x, y });
      setTooltipVisible(true);
    } else {
      setTooltipVisible(false);
    }
  };

  const handleAddPerson = () => {
    if (newPerson.trim() && !people.includes(newPerson)) {
      setPeople((prevPeople) => [...prevPeople, newPerson]);
      setActiveAuthors((prev) => new Set(prev).add(newPerson));
      setNewPerson("");
    }
  };

  const handleAuthorToggle = (person: string) => {
    setActiveAuthors((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(person)) {
        newSet.delete(person);
      } else {
        newSet.add(person);
      }
      return newSet;
    });
  };

  const handleCategoryToggle = (category: string) => {
    setActiveCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleDialogSubmit = useCallback(() => {
    if (startPoint && endPoint) {
      const colorMap: Record<string, string> = {
        Pass: "red",
        Dribbling: "blue",
        SFG: "green",
        Regain: "#FFA500",
      };

      const newArrow: Arrow = {
        start: startPoint,
        end: endPoint,
        color: colorMap[selectedColor],
        minute,
        author,
      };

      setArrows((prevArrows) => [...prevArrows, newArrow]);
      setDialogOpen(false);
      setStartPoint(null);
      setEndPoint(null);
    }
  }, [startPoint, endPoint, selectedColor, minute, author]);

  const isPointOnLine = useMemo(
    () => (x: number, y: number, start: Point, end: Point) => {
      const buffer = 5;
      const a = end.y - start.y;
      const b = start.x - end.x;
      const c = end.x * start.y - start.x * end.y;
      return Math.abs(a * x + b * y - c) / Math.sqrt(a * a + b * b) < buffer;
    },
    []
  );

  const filteredArrows = useMemo(
    () =>
      arrows.filter((arrow) => {
        const minuteValue = parseInt(arrow.minute, 10);
        const categoryName = categories.find(
          (c) => c.color === arrow.color
        )?.name;
        return (
          minuteValue >= filterValue[0] &&
          minuteValue <= filterValue[1] &&
          activeAuthors.has(arrow.author) &&
          categoryName &&
          activeCategories.has(categoryName)
        );
      }),
    [arrows, filterValue, activeAuthors, activeCategories]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>
          Filtruj według minuty: {filterValue[0]} - {filterValue[1]}
        </h3>
        <FilterComponent
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </div>

      <CategoryFilter
        categories={categories}
        activeCategories={activeCategories}
        onToggle={handleCategoryToggle}
      />

      <div style={{ display: "flex" }}>
        <CanvasComponent
          arrows={arrows}
          filteredArrows={filteredArrows}
          drawStartPoint={drawStartPoint}
          onCanvasClick={handleCanvasClick}
          onMouseMove={handleMouseMove}
          isHovering={isHovering}
          startPoint={startPoint}
        />
        <ArrowDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          minute={minute}
          setMinute={setMinute}
          author={author}
          setAuthor={setAuthor}
          handleDialogSubmit={handleDialogSubmit}
          people={people}
        />
        <TooltipComponent
          tooltipVisible={tooltipVisible}
          tooltipInfo={tooltipInfo}
        />
      </div>

      <PeopleList
        people={people}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
        handleAddPerson={handleAddPerson}
        handleAuthorToggle={handleAuthorToggle}
        activeAuthors={activeAuthors}
      />
    </div>
  );
};

export default FootballField;

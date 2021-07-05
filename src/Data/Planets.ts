import { Planet } from "../Models/Planet";

export const findPlanetByName = (name: string): Planet | undefined => PLANETS.find(x => x.name === name);

export const PLANETS: Planet[] = [
  {
    name: "Archon Ren",
    resources: 2,
    influence: 3,
    isLegendary: false,
  },
  {
    name: "Archon Tau",
    resources: 1,
    influence: 1,
    isLegendary: false,
  },
  {
    name: "Mordai II",
    resources: 4,
    influence: 0,
    isLegendary: false,
  },
  {
    name: "Tren'lak",
    resources: 1,
    influence: 0,
    isLegendary: false,
  },
  {
    name: "Quinarra",
    resources: 3,
    influence: 1,
    isLegendary: false,
  },
];

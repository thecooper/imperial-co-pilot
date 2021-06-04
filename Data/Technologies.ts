import { Technology } from "../Models/Technology";

export const findTechByName = (name: string): Technology =>
  TECHNOLOGIES.find((x) => x.name === name)!;

export const TECHNOLOGIES: Technology[] = [
  {
    type: "cybernetic",
    name: "Graviton Laser System",
    description: "",
    preRequisites: 1,
    isFaction: false,
  },
  {
    name: "Daxcive Animators",
    description: "",
    type: "biotic",
    preRequisites: 1,
    isFaction: false,
  },
  {
	  name: "Nullification Field",
	  description: "After another player activates a system that contains 1 or more of your ships, you may exhaust this card and spend 1 token from your strategy pool; immediately end that player's turn.",
	  type: "cybernetic",
	  preRequisites: 2,
	  isFaction: true
  },
  {
	  name: "Instinct Training",
	  description: "You may exhaust this card and spend 1 token from your strategy pool when another player plays an action card; cancel that action card.",
	  type: "biotic",
	  preRequisites: 1,
	  isFaction: true
  },
];

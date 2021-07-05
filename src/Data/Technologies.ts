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
  {
    name: "Valefar Assimilator X",
    description: "When you would gain another player's technology using 1 of your faction abilities, you may place the \"X\" assimilator token on a faction technology owned by that player instead.  While that token is on a technology, this card gains that technology's text.  You cannot place an assimilator token on technology that already has an assimilator token.",
    preRequisites: 0,
    isFaction: true
  },
  {
    name: "Valefar Assimilator Y",
    description: "When you would gain another players technology using 1 of your faction abilities, you may place the \"Y\" assimilator token on a faction technology owned by that player instead.  While that token is on a technology, this card gains that technology's text.  You cannot place an assimilator token on technology that already has an assimilator token.",
    preRequisites: 0,
    isFaction: true
  },
  {
    name: "Valkyrie Particle Weave",
    type: "warfare",
    description: "After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit",
    preRequisites: 2,
    isFaction: true
  },
];

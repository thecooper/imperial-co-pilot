import { Faction } from "../Models/Faction";
import { findPlanetByName } from "./Planets";
import { findTechByName } from "./Technologies";
import { findUnitByName } from "./Units";

export const findFactionByName = (name: string): Faction | undefined => FACTIONS.find(x => x.name === name);

export const FACTIONS: Faction[] = [
  {
    name: "The Xxcha Kingdon",
    commodities: 4,
    startingTechs: [
      findTechByName("Graviton Laser System")
    ],
    startingUnits: [
		{ 
			count: 1, 
			ship: findUnitByName("Carrier")
		},
		{ 
			count: 2, 
			ship: findUnitByName("Cruiser")
		},
		{ 
			count: 3, 
			ship: findUnitByName("Fighter")
		},
		{ 
			count: 4, 
			ship: findUnitByName("Infantry")
		},
		{ 
			count: 1, 
			ship: findUnitByName("Space Dock")
		},
		{ 
			count: 1, 
			ship: findUnitByName("PDS")
		},
	],
    planets: [
      findPlanetByName("Archon Ren"),
      findPlanetByName("Archon Tau"),
    ],
    abilities: [
      {
        name: "Peace Accords",
        description: "After you resolve the primary or secondary ability of the \"Diplomacy\" strategy card, you main gain control of 1 planet other than Mecatol Rex that does not contain any units and is in a system that is adjacent to a planet you control.",
      },
      {
        name: "Quash",
        description: "When an agenda is revealed, you may spend 1 token from your strategy pool to discard that agenda and reveal 1 agenda from teh top of the deck. Players vote on this agenda instead."
      }
    ],
    leaders: {
      agent: [
        {
          name: "Ggrocuto Rinn",
          description: "ACTION: Exhaust this card to ready any planet; if that planet is in a system that is adjacent to a planet you control, you may remove 1 infantry from that planet and return it to its reinforcements.",
        },
      ],
      commander: {
        name: "Elder Qanoj",
        unlockCondition: "Control planet that have a combined value of at least 12 influence",
        description: "Each planet you exhaust to cast votes provides 1 additional vote. Game effects cannot prevent you from voting on an agenda.",
      },
      hero: {
        name: "Xxekir Grom",
        description: "ACTION: You may discard 1 law from play. Look at the top 5 cards of the agenda deck. Choose 2 to reveal, and resolve each as if you had cast 1 vote for an outcome of your choice; discard the rest. Other players cannot resolve abilities during this action. Then, purge this card.",
      },
    },
    factionTechs: [
      findTechByName("Nullification Field"),
      findTechByName("Instinct Training")
    ],
    factionUnits: [],
    promissoryNotes: [{
      name: "Political Favor",
      description: [
        "When an agenda is revealed:",
        "Remove 1 token from the Xxcha player's strategy pool and return it to their reinforcements.  Then, discard the revealed agenda and reveal 1 agenda from the top of the deck.  Players vote on this agenda instead.",
        "Then, return this card to the Xxcha player"
      ]
    }],
    color: "green",
  },
  {
    name: "The Nekro Virus",
    commodities: 3,
    startingTechs: [
      findTechByName("Daxcive Animators"),
    ],
    startingUnits: [
      {
        count: 1,
        ship: findUnitByName("Dreadnaught")
      },
      {
        count: 1,
        ship: findUnitByName("Carrier")
      },
      {
        count: 1,
        ship: findUnitByName("Cruiser")
      },
      {
        count: 2,
        ship: findUnitByName("Fighter")
      },
      {
        count: 2,
        ship: findUnitByName("Infantry")
      },
      {
        count: 1,
        ship: findUnitByName("Space Dock")
      }
    ],
    planets: [
      findPlanetByName("Mordai II")
    ],
    abilities: [
      {
        name: "Galactic Threat",
        description: "You cannot vote on agendas.  Once per agenda phase, after an agenda is revealed, you may predict aloud the outcome of that agenda.  If your prediction is correct, gain 1 technology that is owned by a player who voted how you predicted."
      },
      {
        name: "Technological Singularity",
        description: "Once per combat, after 1 of your opponent's units is destroyed, you may gain 1 technology that is owned by that player."
      },
      {
        name: "Propagation",
        description: "You cannot research technology.  When you would research a technology, gain 3 command tokens instead."
      },
    ],
    promissoryNotes: [{
      name: "Antivirus",
      description: [
        "At the start of a combat:",
        "Place this card face-up in your play area.",
        "While this card is in your play area, the Nekro player cannot use their TECHNOLOGICAL SINGULARITY faction ability against you.",
        "If you activate a system that contains 1 or more of the Nekro player's units, return this card to the Nekro player.",
      ]
    }],
    leaders: {
      agent: [
        {
          name: "",
          description: "",
        },
      ],
      commander: {
        name: "",
        unlockCondition: "",
        description: "",
      },
      hero: {
        name: "",
        description: "",
      },
    },
    factionTechs: [],
    factionUnits: [],
    color: "black",
  },
];

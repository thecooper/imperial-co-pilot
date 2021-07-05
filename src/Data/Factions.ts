import { Faction } from "../Models/Faction";
import { findPlanetByName } from "./Planets";
import { findTechByName } from "./Technologies";
import { findUnitByName } from "./Units";

export const findFactionByName = (name: string): Faction | undefined =>
  FACTIONS.find((x) => x.name === name);

export const FACTIONS: Faction[] = [
  {
    name: "The Xxcha Kingdon",
    commodities: 4,
    startingTechs: [findTechByName("Graviton Laser System")],
    startingUnits: [
      {
        count: 1,
        ship: findUnitByName("Carrier"),
      },
      {
        count: 2,
        ship: findUnitByName("Cruiser"),
      },
      {
        count: 3,
        ship: findUnitByName("Fighter"),
      },
      {
        count: 4,
        ship: findUnitByName("Infantry"),
      },
      {
        count: 1,
        ship: findUnitByName("Space Dock"),
      },
      {
        count: 1,
        ship: findUnitByName("PDS"),
      },
    ],
    planets: [findPlanetByName("Archon Ren"), findPlanetByName("Archon Tau")],
    abilities: [
      {
        name: "Peace Accords",
        description:
          'After you resolve the primary or secondary ability of the "Diplomacy" strategy card, you main gain control of 1 planet other than Mecatol Rex that does not contain any units and is in a system that is adjacent to a planet you control.',
      },
      {
        name: "Quash",
        description:
          "When an agenda is revealed, you may spend 1 token from your strategy pool to discard that agenda and reveal 1 agenda from teh top of the deck. Players vote on this agenda instead.",
      },
    ],
    leaders: {
      agent: [
        {
          name: "Ggrocuto Rinn",
          description:
            "ACTION: Exhaust this card to ready any planet; if that planet is in a system that is adjacent to a planet you control, you may remove 1 infantry from that planet and return it to its reinforcements.",
        },
      ],
      commander: {
        name: "Elder Qanoj",
        unlockCondition:
          "Control planet that have a combined value of at least 12 influence",
        description:
          "Each planet you exhaust to cast votes provides 1 additional vote. Game effects cannot prevent you from voting on an agenda.",
      },
      hero: {
        name: "Xxekir Grom",
        abilityName: "Political Data Nexus",
        description:
          "ACTION: You may discard 1 law from play. Look at the top 5 cards of the agenda deck. Choose 2 to reveal, and resolve each as if you had cast 1 vote for an outcome of your choice; discard the rest. Other players cannot resolve abilities during this action. Then, purge this card.",
      },
    },
    factionTechs: [
      findTechByName("Nullification Field"),
      findTechByName("Instinct Training"),
    ],
    mech: {
      name: "Indomitus",
      isFaction: true,
      combat: 6,
      cost: 2,
      abilities: [
        {
          type: "Sustain Damage"
        },
        {
          type: "Space Cannon",
          hitsOn: 8
        }
      ],
      description: "You may use this unit's Space Cannon ability against ships that are in adjacent systems."
    },
    flagship: {
      name: "Loncarra Ssodu",
      cost: 8,
      combat: {
        rolls: 2,
        hitsOn: 7
      },
      move: 1,
      capacity: 3,
      abilities: [
        {
          type: "Space Cannon",
          hitsOn: 5,
          rolls: 3
        },
        {
          type: "Sustain Damage"
        }
      ],
      description: "You may use this unit's SPACE CANNON against ships that are in adjacent systems.",
      isFaction: true,
    },
    promissoryNotes: [
      {
        name: "Political Favor",
        description: `When an agenda is revealed:\n\nRemove 1 token from the Xxcha player's strategy pool and return it to their reinforcements.  Then, discard the revealed agenda and reveal 1 agenda from the top of the deck.  Players vote on this agenda instead.\n\nThen, return this card to the Xxcha player`,
      },
    ],
    color: "green",
  },
  {
    name: "The Nekro Virus",
    commodities: 3,
    startingTechs: [findTechByName("Daxcive Animators")],
    startingUnits: [
      {
        count: 1,
        ship: findUnitByName("Dreadnaught"),
      },
      {
        count: 1,
        ship: findUnitByName("Carrier"),
      },
      {
        count: 1,
        ship: findUnitByName("Cruiser"),
      },
      {
        count: 2,
        ship: findUnitByName("Fighter"),
      },
      {
        count: 2,
        ship: findUnitByName("Infantry"),
      },
      {
        count: 1,
        ship: findUnitByName("Space Dock"),
      },
    ],
    planets: [findPlanetByName("Mordai II")],
    abilities: [
      {
        name: "Galactic Threat",
        description:
          "You cannot vote on agendas.  Once per agenda phase, after an agenda is revealed, you may predict aloud the outcome of that agenda.  If your prediction is correct, gain 1 technology that is owned by a player who voted how you predicted.",
      },
      {
        name: "Technological Singularity",
        description:
          "Once per combat, after 1 of your opponent's units is destroyed, you may gain 1 technology that is owned by that player.",
      },
      {
        name: "Propagation",
        description:
          "You cannot research technology.  When you would research a technology, gain 3 command tokens instead.",
      },
    ],
    promissoryNotes: [
      {
        name: "Antivirus",
        description: `At the start of a combat:\n\nPlace this card face-up in your play area.\n\nWhile this card is in your play area, the Nekro player cannot use their TECHNOLOGICAL SINGULARITY faction ability against you.\n\nIf you activate a system that contains 1 or more of the Nekro player's units, return this card to the Nekro player.`,
      },
    ],
    mech: {
      name: "Mordred",
      description: "During combat against an opponent who has an \"X\" or \"Y\" token on 1 or more of their technologies, apply +2 to the result of each of this unit's combat rolls.",
      cost: 2,
      combat: 6,
      isFaction: true,
      abilities: [{ type: "Sustain Damage" }]
    },
    flagship: {
      name: "The Alastor",
      description: "At the start of a space combat, choose any number of your ground forces in this system to participate in that combat as if they were ships.",
      cost: 8,
      combat: { hitsOn: 9, rolls: 2 },
      move: 1,
      capacity: 3,
      isFaction: true,
      abilities: [{ type: "Sustain Damage" }]
    },
    leaders: {
      agent: [
        {
          name: "Nekro Malleon",
          description:
            "During the action phase: \n\nYou may exhaust this card to choose a player; that player may discard 1 action card or spend 1 command token from their command sheet to gain 2 trade goods.",
        },
      ],
      commander: {
        name: "Nekro Acidos",
        unlockCondition:
          'Own 3 technologies. A "Valefa Assimilator" technology counts only if its X or Y token is on a technology',
        description:
          "After you gain a technology: \n\nYou may draw 1 action card.",
      },
      hero: {
        name: "UNIT.DSGN.FLAYESH",
        abilityName: "Polymorphic Algorithm",
        description:
          "ACTION: Choose a planet that has a technology specialty in a system that contains your units. Destroy any other player's units on that planet. Gain trade goods equal to that planet's combined resource and influence values and gain 1 technology that matches the specialty of that planet. Then, purge this card.",
      },
    },
    factionTechs: [
      findTechByName("Valefar Assimilator X"),
      findTechByName("Valefar Assimilator Y"),
    ],
    color: "black",
  },
  {
    name: "Sardakk N'orr",
    commodities: 3,
    startingTechs: [],
    startingUnits: [
      {
        count: 2,
        ship: findUnitByName("Carrier"),
      },
      {
        count: 1,
        ship: findUnitByName("Cruiser"),
      },
      {
        count: 5,
        ship: findUnitByName("Infantry"),
      },
      {
        count: 1,
        ship: findUnitByName("Space Dock"),
      },
      {
        count: 1,
        ship: findUnitByName("PDS"),
      },
    ],
    planets: [
      findPlanetByName("Tren'lak"),
      findPlanetByName("Quinarra"),
    ],
    abilities: [
      {
        name: "Unrelenting",
        description:
          "Apply +1 to the result of each of your unit's combat rolls.",
      },
    ],
    promissoryNotes: [
      {
        name: "Tekklar Legion",
        description: `At the start of an invasion combat:\n\nApply +1 to the result of each of your unit's combat rolls during this combat.  If your opponent is the N'orr player, apply -1 to the result of each of his unit's combat rolls during this combat.\n\nThen, return this card to the N'orr player.`,
      },
    ],
    leaders: {
      agent: [
        {
          name: "T'ro",
          description:
            "At the end of a player's tactical action:\n\nYou may exhaust this card; if you do, that player may place 2 infantry from their reinforcements on a planet they control in the active system.",
        },
      ],
      commander: {
        name: "G'hom Sek'kus",
        unlockCondition:
          'Control 5 planets in non-home systems',
        description:
          "During the \"Commit Ground Forces\" step:\n\nYou can commit up to 1 ground force from each planet in the active system and each planet in adjacent systems that do not contain 1 of your command tokens.",
      },
      hero: {
        name: "Sh'val, Harbinger",
        abilityName: "TEKKLAR CONDITIONING",
        description:
          "After you move ships into the active system:\n\nYou may skip directly to the \"Commit Ground Forces\" step. If you do, after you commit ground forces to land on planets, purge this card and return each of your ships in the active system to your reinforcements.",
      },
    },
    factionTechs: [
      findTechByName("Valkyrie Particle Weave"),
    ],
    mech: {
      name: "Valkyrie Exoskeleton",
      description: "After this unit uses its SUSTAIN DAMAGE ability during Ground Combat, it produces 1 hit against your opponent's ground forces on this planet.",
      cost: 2,
      combat: 6,
      isFaction: true,
      abilities: [{ type: "Sustain Damage" }]
    },
    flagship: {
      name: "C'Morran N'orr",
      description: "Apply +1 to the result of each of your other ship's combat rolls in this system.",
      combat: { hitsOn: 6, rolls: 2 },
      cost: 8,
      move: 1,
      capacity: 3,
      abilities: [{ type: "Sustain Damage" }],
      isFaction: true
    },
    factionUnits: {
      first: {
        base: {
          name: "Exotrireme I",
          cost: 4,
          combat: 5,
          move: 1,
          capacity: 1,
          abilities: [{ type: "Sustain Damage" }, { type: "Bombardment", hitsOn: 4, rolls: 2 }],
          isFaction: true,
        },
        upgrade: {
          name: "Exotrireme I",
          description: `This unit cannot be destroyed by "Direct Hit" action cards.\n\nAfter a round of space combat, you may destroy this unit to destroy up to 2 ships in this system.`,
          cost: 4,
          combat: 5,
          move: 1,
          capacity: 1,
          abilities: [{ type: "Sustain Damage" }, { type: "Bombardment", hitsOn: 4, rolls: 2 }],
          isFaction: true,
          preRequisites: [ "propulsion", "propulsion", "cybernetic" ]
        }
      }
    },
    color: "red",
  },
];

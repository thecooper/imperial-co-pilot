import { Unit, UnitNames } from "../Models/Unit";

export const findUnitByName = (unitName: UnitNames): Unit => BASE_UNITS.find(x => x.name === unitName)!;

export const BASE_UNITS: Unit[] = [
	{
		name: "Carrier",
		cost: 3,
		combat: 8,
		move: 1,
		capacity: 4,
		abilities: [],
		isFaction: false,
	},
	{
		name: "Destroyer",
		cost: 1,
		combat: 8,
		move: 2,
		capacity: 0,
		abilities: [
			{
				type: "Anti-Fighter Barrage",
				hitsOn: 9,
				rolls: 3
			}
		],
		isFaction: false,
	},
	{
		name: "Cruiser",
		cost: 2,
		combat: 7,
		move: 2,
		capacity: 0,
		abilities: [],
		isFaction: false,
	},
	{
		name: "Dreadnaught",
		cost: 4,
		combat: 5,
		move: 1,
		capacity: 0,
		abilities: [],
		isFaction: false,
	},
	{
		name: "Warsun",
		cost: 12,
		combat: { hitsOn: 3, rolls: 3 },
		move: 1,
		capacity: 3,
		abilities: [{
			type: "Bombardment",
			hitsOn: 5,
			rolls: 3
		}],
		isFaction: false,
	},
	{
		name: "Fighter",
		cost: { cost: 1, pieces: 2 },
		combat: 9,
		move: 0,
		capacity: 0,
		abilities: [],
		isFaction: false,
	},
	{
		name: "Infantry",
		cost: { cost: 1, pieces: 2 },
		combat: 8,
		move: 0,
		capacity: 0,
		abilities: [],
		isFaction: false,
	},
	{
		name: "Space Dock",
		abilities: [
			{
				type: "Production",
				value: 2
			}
		],
		description: "A Space Dock's production value is equal to 2 more than the resource value of the planet it's on. \r\r Up to 3 fighters in this system do not count against your ships' capacity.",
		isFaction: false,
	},
	{
		name: "PDS",
		abilities: [
			{
				type: "Planetary Shield"
			},
			{
				type: "Space Cannon",
				hitsOn: 6
			}
		],
		isFaction: false,
	},
];
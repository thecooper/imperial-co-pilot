import { Planet } from "./Planet";
import { Unit } from "./Unit";
import { Technology } from "./Technology";
import { UnitUpgrade } from "./UnitUpgrade";

type FactionUnit = {
	base: Unit;
	upgrade: UnitUpgrade;
};

export interface Faction {
	name: string;
	commodities: number;
	startingTechs: Technology[];
	startingUnits: {
		ship: Unit;
		count: number;
	}[];
	planets: (Planet | undefined)[];
	abilities: {
		name: string;
		description: string;
	}[];
	leaders: {
		agent: {
			name: string;
			description: string;
		}[],
		commander: {
			name: string;
			unlockCondition: string;
			description: string;
		},
		hero: {
			name: string;
			abilityName: string;
			description: string;
		}
	};
	factionUnits?: {
		first: FactionUnit;
		second?: FactionUnit;
	};
	factionTechs: Technology[];
	promissoryNotes?: {
		name: string;
		description: string;
	}[];
	mech?: Unit;
	flagship?: Unit;
	color: string;
}
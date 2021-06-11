export type UnitAbility = {
	type: "Anti-Fighter Barrage",
	hitsOn: number,
	rolls: number
} | {
	type: "Bombardment",
	hitsOn: number,
	rolls: number
} | {
	type: "Planetary Shield",
} | {
	type: "Production",
	value: number;
} | {
	type: "Space Cannon",
	hitsOn: number;
	rolls?: number;
} | {
	type: "Sustain Damage",
};

export type UnitNames = "Carrier" | "Destroyer" | "Cruiser" | "Dreadnaught" | "Warsun" | "Fighter" | "Infantry" | "Mech" | "PDS" | "Space Dock";

export interface UnitMetrics {
	cost?: number | { pieces: number, cost: number };
	combat?: number | { hitsOn: number, rolls: number };
	move?: number;
	capacity?: number;
}

export interface Unit extends UnitMetrics {
	name: string;
	description?: string;
	abilities: UnitAbility[];
	isFaction: boolean;
}
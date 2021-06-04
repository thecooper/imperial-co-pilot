type UnitAbility = {
	type: "Sustain Damange"
} | {
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
} | {
	type: "Sustain Damage",
};

export type UnitNames = "Carrier" | "Destroyer" | "Cruiser" | "Dreadnaught" | "Warsun" | "Fighter" | "Infantry" | "Mech" | "PDS" | "Space Dock";

export interface Unit {
	name: UnitNames;
	cost?: number | { pieces: number, cost: number };
	combat?: number | { hitOn: number, rolls: number };
	move?: number;
	capacity?: number;
	description?: string;
	abilities: UnitAbility[];
	isFaction: boolean;
}
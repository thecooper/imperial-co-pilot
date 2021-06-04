type Anomoly = "nebula" | "supernova" | "gavity-rift" | "asteroid-field";

export interface System {
	planets: string[];
	identifier: number;
	type: Anomoly | null;
}
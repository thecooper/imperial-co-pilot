import { TechType } from "./TechType";

export interface Planet {
	name: string;
	resources: number;
	influence: number;
	techSkip?: TechType;
	modifiers?: [];
	isLegendary: boolean;
}
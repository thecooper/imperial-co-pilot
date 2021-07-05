import { TechType } from "./TechType";
import { Unit } from "./Unit";

export interface UnitUpgrade extends Unit {
	preRequisites: TechType[];
}
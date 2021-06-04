import { Prerequisites } from "./Prerequisites";
import { TechType } from "./TechType";

// export type TechnologyName = "Graviton Laser System" | "Daxcive Animators";

const TECH_COLORS = {
	biotic: "#00642d",
	warfare: "#7e0718",
	propulsion: "#04517b",
	cybernetic: "#7a7913"
}

export const getTechColor = (techType: TechType): string => TECH_COLORS[techType];

export interface Technology {
	name: string;
	description: string;
	type: TechType;
	preRequisites: number;
	isFaction: boolean;
}

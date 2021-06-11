import React from "react";
import { Text } from "react-native";
import { UnitAbility as UnitAbilityType } from "../Models/Unit";

export function UnitAbility({ ability, ...otherProps }: { ability: UnitAbilityType, style?: any }) {
	switch(ability.type) {
		case "Sustain Damage":
		case "Planetary Shield":
			return <Text {...otherProps}>{ability.type}</Text>;
		case "Production":
			return <Text {...otherProps}>{ability.type} {ability.value}</Text>;
		case "Space Cannon":
		case "Anti-Fighter Barrage":
		case "Bombardment":
			return <Text {...otherProps}>{ability.type} {ability.hitsOn}{ability.rolls ? ` (x${ability.rolls})` : ""}</Text>
	}
}
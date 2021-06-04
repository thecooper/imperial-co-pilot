import React from "react";
import { View } from "react-native";
import { getTechColor } from "../Models/Technology";
import { TechType } from "../Models/TechType";

export function TechIcon({ type, style }: { type: TechType, style?: any }) {
	return <View 
		style={{
			width: 25,
			height: 25,
			borderRadius: 20,
			backgroundColor: getTechColor(type),
			...style
		}}
	/>
}
import React from "react";
import { View } from "react-native";
import { getTechColor } from "../Models/Technology";
import { TechType } from "../Models/TechType";

export function TechIcon({ type, style }: { type: TechType | undefined, style?: any }) {
	if(type === undefined) return null
	
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
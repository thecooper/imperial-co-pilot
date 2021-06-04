import React from "react";
import { View, FlatList, Text } from "react-native";
import { Faction } from "../../Models/Faction";
import { SCREEN_WIDTH, SPACING } from "../../spacing";
import { FactionSheet } from "../FactionSheet";

export function FactionSelector({factions}: { factions: Faction[] }) {
	return <FlatList
		data={factions}
		keyExtractor={faction => faction.name}
		renderItem={faction => <FactionSheet faction={faction.item} />}
		horizontal
		showsHorizontalScrollIndicator={false}
		snapToInterval={SCREEN_WIDTH}
	/>;
}
import React from "react";
import { FACTIONS } from "../Data/Factions";
import { FactionSheet } from "./FactionSheet";
import { PanningSelector } from "./PanningSelector";

export function FactionSelector() {
  return (
    <PanningSelector
      items={FACTIONS}
      renderItem={({ item }) => <FactionSheet faction={item} />}
      keyExtractor={(item) => item.name}
      onSelected={(faction) => console.log(faction.name)}
      selectText={(faction) => `Select ${faction.name}`}
    />
  );
}

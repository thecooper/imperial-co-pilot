import React from "react";
import {
  Text,
  View
} from "react-native";
import { UnitMetrics } from "../Models/Unit";

export function UnitDisplayBox({
  title, unit, style, fontSize = 20, ...otherProps
}: {
  title: "Cost" | "Combat" | "Move" | "Capacity";
  unit: UnitMetrics;
  style?: any,
  fontSize?: number;
}) {
  let valueComponent = "";

  switch (title) {
    case "Cost":
      valueComponent = unit.cost !== undefined ? typeof unit.cost === "number" ? `${unit.cost}` : `${unit.cost.cost} x ${unit.cost.pieces}` : "";
      break;
    case "Move":
      valueComponent = unit.move ? `${unit.move}` : "";
      break;
    case "Capacity":
      valueComponent = unit.capacity ? `${unit.capacity}` : "";
      break;
    case "Combat":
      valueComponent = unit.combat !== undefined ? typeof unit.combat === "number" ? `${unit.combat}` : `${unit.combat.hitsOn} (x${unit.combat.rolls})` : "";
      break;
  }

  return (
    <View style={{ flex: 1, ...style }} {...otherProps}>
      <Text style={{ textAlign: "center", fontSize: fontSize, fontWeight: "bold" }}>{title}</Text>
      {<Text style={{ textAlign: "center", fontSize: fontSize }}>
        {valueComponent}
      </Text>}
    </View>
  );
}

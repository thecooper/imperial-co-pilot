import React from "react";
import {
  Text,
  View
} from "react-native";
import { SPACING } from "../spacing";
import { UnitAbility } from "./UnitAbility";
import { UnitDisplayBox } from "./UnitDisplayBox";
import { Unit as UnitModel } from "../Models/Unit";

export function Unit({ unit }: { unit: UnitModel; }) {
  return (
    <>
      {unit.description && unit.description.length > 0 ? <Text style={{ marginBottom: SPACING }}>{unit.description}</Text> : null}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {unit.abilities.map((x) => (
          <UnitAbility
            style={{ fontWeight: "bold", marginHorizontal: SPACING / 2 }}
            ability={x} />
        ))}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: -SPACING,
          marginTop: SPACING,
        }}
      >
        <UnitDisplayBox style={{ borderRightColor: "#ccc", borderRightWidth: 1 }} fontSize={16} title="Cost" unit={unit} />
        <UnitDisplayBox style={{ borderRightColor: "#ccc", borderRightWidth: 1 }} fontSize={16} title="Combat" unit={unit} />
        <UnitDisplayBox style={{ borderRightColor: "#ccc", borderRightWidth: 1 }} fontSize={16} title="Move" unit={unit} />
        <UnitDisplayBox fontSize={16} title="Capacity" unit={unit} />
      </View>
    </>
  );
}

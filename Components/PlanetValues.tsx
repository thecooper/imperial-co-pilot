import React from "react";
import { Text } from "react-native";

function PlanetValue({ value, type, style, ...otherProps }: { value: number, style?: any, type: "resource" | "influence" }) {
  return (
    <Text
      style={{
        borderColor: type === "influence" ? "#2e75d3" : "#e4e060",
        borderWidth: 2,
		color: "black",
		fontSize: 18,
        textAlign: "center",
        width: 30,
        height: 30,
        lineHeight: 30,
        borderRadius: 10,
		...style
      }}
	  {...otherProps}
    >
      {value}
    </Text>
  );
}

export const Influence = ({value, style}: {value: number, style?: any}) => <PlanetValue style={style} value={value} type="influence" />

export const Resource = ({value, style}: {value: number, style?: any}) => <PlanetValue style={style} value={value} type="resource" />

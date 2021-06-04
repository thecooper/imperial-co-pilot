import React from "react";
import { Text } from "react-native";
import { SPACING } from "../spacing";

export function SectionHeader({ children }: React.PropsWithChildren<{}>) {
  return (
    <Text
      style={{
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        marginVertical: SPACING,
      }}
    >
      {children}
    </Text>
  );
}

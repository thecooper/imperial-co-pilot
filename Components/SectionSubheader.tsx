import React from "react";
import { Text } from "react-native";
import { SPACING } from "../spacing";

export function SectionSubheader({
  style, children,
}: React.PropsWithChildren<{ style?: any; }>) {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: SPACING,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

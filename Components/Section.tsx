import React from "react";
import { View } from "react-native";
import { SPACING } from "../spacing";

export function Section({
  style, children, ...otherProps
}: React.PropsWithChildren<{
  style?: any;
}>) {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: SPACING,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </View>
  );
}

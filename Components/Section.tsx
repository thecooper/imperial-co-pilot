import React from "react";
import { View } from "react-native";
import { SPACING } from "../spacing";
import { SectionSubheader } from "./SectionSubheader";

export function Section({
  title,
  style,
  children,
  ...otherProps
}: React.PropsWithChildren<{
  title?: string;
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
      {title ? <SectionSubheader>{title}</SectionSubheader> : null}
      {children}
    </View>
  );
}

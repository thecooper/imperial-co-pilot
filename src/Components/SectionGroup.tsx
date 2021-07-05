import React, { useEffect } from "react";
import { useRef } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { SPACING } from "../../spacing";
import { SectionHeader } from "./SectionHeader";

export function SectionGroup({
  title,
  children,
  onHeaderOffsetChange,
}: {
  title: string;
  children: any;
  onHeaderOffsetChange?: (headerOffset: number) => void;
}) {
  const handleLayoutChange = (e: LayoutChangeEvent) => {
    onHeaderOffsetChange?.(e.nativeEvent.layout.y);
  };

  return (
    <View onLayout={handleLayoutChange}>
      <SectionHeader>{title}</SectionHeader>
      {children &&
        React.Children.map(children, (child, idx) => {
          if (child === null) return null;

          return React.cloneElement(child, {
            style: {
              marginBottom: 0,
              borderColor: "#ccc",
              borderTopWidth: idx > 0 ? 1 : 0,
            },
          });
        })}
    </View>
  );
}

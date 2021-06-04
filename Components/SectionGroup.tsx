import React from "react";
import { SPACING } from "../spacing";

export function SectionGroup({ children }: { children: any }) {
  return (
    children &&
    React.Children.map(children, (child, idx) =>
      React.cloneElement(child, {
        style: {
          marginBottom: 0,
          borderColor: "#ccc",
          borderTopWidth: idx > 0 ? 1 : 0,
        },
      })
    )
  );
}

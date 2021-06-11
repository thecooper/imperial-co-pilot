import React from "react";
import { SPACING } from "../spacing";
import { SectionHeader } from "./SectionHeader";

export function SectionGroup({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

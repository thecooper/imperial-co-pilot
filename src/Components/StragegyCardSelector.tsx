import React from "react";
import { STRATEGY_CARDS } from "../Data/StragegyCards";
import { PanningSelector } from "./PanningSelector";
import { StrategyCard } from "./StrategyCard";

export function StrategyCardSelector() {
  return (
    <PanningSelector
      items={STRATEGY_CARDS}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <StrategyCard strategyCard={item} />}
      selectText={strategyCard => `Select ${strategyCard.name}`}
      onSelected={(strategyCard) => console.log(strategyCard.name)}
    />
  );
}

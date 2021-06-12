import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Text,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Faction } from "../Models/Faction";
import { SCREEN_WIDTH, SPACING } from "../spacing";
import { FactionSheet, IHeaderOffsets } from "./FactionSheet";

export function FactionSelector({ factions }: { factions: Faction[] }) {
  const [factionIndex, setFactionIndex] = useState<number>(0);

  const selectFaction = () => {
    console.log(factions[factionIndex].name);
  };

  const updateSelectedFaction = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const xOffset = e.nativeEvent.contentOffset.x;

    const minIndex = Math.floor(xOffset / SCREEN_WIDTH);
    const roundedExtra = Math.round((xOffset % SCREEN_WIDTH) / SCREEN_WIDTH);
    const updatedIndex = minIndex + roundedExtra;

    if (updatedIndex !== factionIndex && updatedIndex >= 0) {
      setFactionIndex(minIndex + roundedExtra);
    }
  };

  return (
    <View>
      <FlatList
        data={factions}
        keyExtractor={(faction) => faction.name}
        renderItem={({ item: faction }) => (
          <FactionSheet
            faction={faction}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH}
        onScroll={updateSelectedFaction}
        alwaysBounceHorizontal={false}
        disableIntervalMomentum={true}
      />
      <View
        style={{
          position: "absolute",
          left: SPACING * 2,
          right: SPACING * 2,
          bottom: SPACING,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#2196f3",
            height: SPACING * 4,
            borderRadius: 4,
          }}
          disabled={factionIndex === null}
          onPress={selectFaction}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 18,
              lineHeight: SPACING * 4,
            }}
          >
            Select {factions[factionIndex].name}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { SCREEN_WIDTH, SPACING } from "../spacing";

export function PanningSelector<T>({
  items,
  selectText = "Select",
  renderItem,
  keyExtractor,
  onSelected,
}: {
  items: T[];
  selectText?: string | ((item: T) => string);
  renderItem: (value: { item: T; index: number }) => React.ReactElement | null;
  keyExtractor: (item: T) => string;
  onSelected?: (selectedItem: T) => void;
}) {
  const [itemIndex, setItemIndex] = useState<number>(0);

  const selectItem = () => {
    onSelected?.(items[itemIndex]);
  };

  const updateSelectedFaction = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const xOffset = e.nativeEvent.contentOffset.x;

    const minIndex = Math.floor(xOffset / SCREEN_WIDTH);
    const roundedExtra = Math.round((xOffset % SCREEN_WIDTH) / SCREEN_WIDTH);
    const updatedIndex = minIndex + roundedExtra;

    if (updatedIndex !== itemIndex && updatedIndex >= 0) {
      setItemIndex(minIndex + roundedExtra);
    }
  };

  const selectedItem =
    itemIndex > 0 && itemIndex < items.length ? items[itemIndex] : null;

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH}
        onScroll={updateSelectedFaction}
        alwaysBounceHorizontal={false}
        disableIntervalMomentum={true}
      />
      {selectedItem ? (
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
            disabled={itemIndex === null}
            onPress={selectItem}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 18,
                lineHeight: SPACING * 4,
              }}
            >
              {typeof selectText === "string"
                ? selectText
                : selectText(selectedItem)}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

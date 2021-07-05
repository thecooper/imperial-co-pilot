import React from "react";
import { View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SCREEN_HEIGHT, SCREEN_WIDTH, SPACING } from "../../spacing";
import { StrategyCardModel } from "../Models/StrategyCardModel";

interface IStrategyCardProps {
  strategyCard: StrategyCardModel;
}

export function StrategyCard({ strategyCard }: IStrategyCardProps) {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: strategyCard.color,
      width: SCREEN_WIDTH,
      height: "auto",
      padding: SPACING,
      // borderColor: "red",
      // borderWidth: 2
    },
    internalView: {
      paddingBottom: SPACING * 6
    },
    cardWrapper: {
      backgroundColor: "#ffffff",
      padding: SPACING,
      marginBottom: SPACING,
      borderRadius: 4,
      elevation: 2,
      shadowColor: "#000000",
      shadowOffset: {
        height: 2,
        width: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    cardName: {
      fontSize: 24,
      fontWeight: "bold",
    },
    subHeader: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: SPACING,
    },
    abilityLine: {
      fontSize: 20,
      marginBottom: SPACING / 2,
      marginLeft: SPACING,
    },
  });

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{
        // marginBottom: SPACING * 6,
      }}
    >
      <View style={styles.internalView}>
        <View style={styles.cardWrapper}>
          <Text style={styles.cardName}>{strategyCard.name}</Text>
        </View>
        <View style={styles.cardWrapper}>
          <View>
            <Text style={styles.subHeader}>Primary Ability</Text>
            {strategyCard.primary.map((line) => (
              <Text style={styles.abilityLine}>{line}</Text>
            ))}
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View>
            <Text style={styles.subHeader}>Secondary Ability</Text>
            {strategyCard.secondary.map((line) => (
              <Text style={styles.abilityLine}>{line}</Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

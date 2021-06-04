import React from "react";
import {
  FlatList,
  StyleProp,
  Text,
  View,
  ViewStyle,
  ScrollView,
} from "react-native";
import { Faction } from "../Models/Faction";
import { getTechColor } from "../Models/Technology";
import { SCREEN_WIDTH, SPACING } from "../spacing";
import { Influence, Resource } from "./PlanetValues";
import { Section } from "./Section";
import { SectionGroup } from "./SectionGroup";
import { SectionHeader } from "./SectionHeader";
import { SectionSubheader } from "./SectionSubheader";
import { TechIcon } from "./TechIcon";

function IndentedText({
  style,
  children,
}: React.PropsWithChildren<{ style?: any }>) {
  return <Text style={{ ...style, paddingLeft: SPACING }}>{children}</Text>;
}

export function FactionSheet({ faction }: { faction: Faction }) {
  const {
    name,
    color,
    commodities,
    startingTechs,
    startingUnits,
    planets,
    abilities,
    leaders,
    factionTechs,
    promissoryNotes,
  } = faction;

  return (
    <ScrollView
      style={{
        width: SCREEN_WIDTH,
        height: "auto",
        backgroundColor: color,
        paddingHorizontal: SPACING,
      }}
      contentContainerStyle={{ paddingBottom: SPACING }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginVertical: SPACING,
          color: "white",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>

      <SectionHeader>General</SectionHeader>
      <SectionGroup>
        <Section>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <SectionSubheader style={{ textAlign: "left" }}>
                Commodities
              </SectionSubheader>
              <IndentedText style={{ fontSize: 30, textAlign: "left" }}>
                {commodities}
              </IndentedText>
            </View>
            <View>
              <SectionSubheader style={{ textAlign: "left" }}>
                Starting Tech
              </SectionSubheader>
              {startingTechs.map((tech) => (
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "left",
                    color: getTechColor(tech.type),
                  }}
                >
                  {tech.name}
                </Text>
              ))}
            </View>
          </View>
        </Section>
        <Section>
          <SectionSubheader>Units</SectionSubheader>
          <FlatList
            style={{ width: "100%" }}
            data={startingUnits}
            keyExtractor={(x) => x.ship.name}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{ width: "50%" }}>
                <IndentedText
                  style={{ fontSize: 16, marginBottom: SPACING / 2 }}
                >
                  {item.count} {item.ship.name}
                </IndentedText>
              </View>
            )}
          />
        </Section>
        <Section>
          <SectionSubheader>Planets</SectionSubheader>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: SPACING,
            }}
          >
            {planets.map((planet) =>
              planet ? (
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      backgroundColor: "#888",
                      alignSelf: "center",
                      marginBottom: SPACING,
                    }}
                  ></View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      marginBottom: SPACING,
                    }}
                  >
                    {planet.name}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Resource value={planet.resources} />
                    <Text style={{ marginHorizontal: SPACING / 2 }}>/</Text>
                    <Influence value={planet.influence} />
                  </View>
                </View>
              ) : null
            )}
          </View>
        </Section>
      </SectionGroup>

      {promissoryNotes && promissoryNotes.length >= 1 ? (
        <React.Fragment>
          <SectionHeader>Promissory Note</SectionHeader>
          <SectionGroup>
            {promissoryNotes.map((x) => (
              <Section>
                <SectionSubheader>{x.name}</SectionSubheader>
                <IndentedText>{x.description}</IndentedText>
              </Section>
            ))}
          </SectionGroup>
        </React.Fragment>
      ) : null}

      <SectionHeader>Faction Abilities</SectionHeader>
      <SectionGroup>
        {abilities.map((ability, idx) => (
          <Section>
            <SectionSubheader>{ability.name.toUpperCase()}</SectionSubheader>
            <IndentedText>{ability.description}</IndentedText>
          </Section>
        ))}
      </SectionGroup>

      {factionTechs.length > 0 ? (
        <React.Fragment>
          <SectionHeader>Faction Techs</SectionHeader>
          {factionTechs.map((tech) => (
            <Section>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: SPACING,
                }}
              >
                <TechIcon type={tech.type} style={{ marginRight: SPACING }} />
                <SectionSubheader
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {tech.name}
                </SectionSubheader>
              </View>
              <IndentedText>{tech.description}</IndentedText>
              <View
                style={{
                  marginTop: SPACING,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Text>Pre-Requisites: </Text>
                {Array.from({ length: tech.preRequisites })
                  .fill(0)
                  .map((_, idx) => (
                    <TechIcon
                      key={idx}
                      style={{ marginHorizontal: SPACING / 2 }}
                      type={tech.type}
                    />
                  ))}
              </View>
            </Section>
          ))}
        </React.Fragment>
      ) : null}

      <SectionHeader>Leaders</SectionHeader>
      <SectionGroup>
        {leaders.agent.map((x, idx) => (
          <Section>
            <SectionSubheader>Agent - {x.name}</SectionSubheader>
            <IndentedText>{x.description}</IndentedText>
          </Section>
        ))}
        <Section>
          <SectionSubheader>
            Commander - {leaders.commander.name}
          </SectionSubheader>
          <Text
            style={{
              backgroundColor: "#ccc",
              padding: SPACING,
              marginBottom: SPACING,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Unlock condition - </Text>
            {leaders.commander.unlockCondition}
          </Text>
          <IndentedText>{leaders.commander.description}</IndentedText>
        </Section>
        <Section>
          <SectionSubheader>Hero - {leaders.hero.name}</SectionSubheader>
          <IndentedText>{leaders.hero.description}</IndentedText>
        </Section>
      </SectionGroup>
    </ScrollView>
  );
}

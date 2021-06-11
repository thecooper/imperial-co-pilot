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
import { SectionSubheader } from "./SectionSubheader";
import { TechIcon } from "./TechIcon";
import { Unit } from "./Unit";
import { UnitAbility } from "./UnitAbility";
import { UnitDisplayBox } from "./UnitDisplayBox";

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
    factionTechs,
    factionUnits,
    promissoryNotes,
    mech,
    flagship,
    leaders,
  } = faction;

  const filteredFactionTechs = factionTechs.filter((x) => x !== undefined);

  return (
    <ScrollView
      style={{
        width: SCREEN_WIDTH,
        height: "auto",
        backgroundColor: color,
        paddingHorizontal: SPACING,
      }}
      contentContainerStyle={{ paddingBottom: SPACING * 6 }}
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

      <SectionGroup title="General">
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
                    color: tech.type ? getTechColor(tech.type) : "black",
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
        <SectionGroup title="Promissory Note">
          {promissoryNotes.map((x) => (
            <Section title={x.name}>
              <IndentedText>{x.description}</IndentedText>
            </Section>
          ))}
        </SectionGroup>
      ) : null}

      <SectionGroup title="Faction Abilities">
        {abilities.map((ability) => (
          <Section title={ability.name.toUpperCase()}>
            <IndentedText>{ability.description}</IndentedText>
          </Section>
        ))}
      </SectionGroup>

      {filteredFactionTechs.length > 0 ? (
        <SectionGroup title="Faction Techs">
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
                {tech.type ? (
                  <TechIcon type={tech.type} style={{ marginRight: SPACING }} />
                ) : null}
                <SectionSubheader
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {tech.name}
                </SectionSubheader>
              </View>
              <IndentedText>{tech.description}</IndentedText>
              {tech.type ? (
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
              ) : null}
            </Section>
          ))}
        </SectionGroup>
      ) : null}

      {factionUnits ? (
        <SectionGroup title="Faction Units">
          <Section title={factionUnits.first.base.name}>
            <Unit unit={factionUnits.first.base} />
          </Section>
          <Section title={factionUnits.first.upgrade.name}>
            <Unit unit={factionUnits.first.upgrade} />
          </Section>
          {factionUnits.second ? (
            <Section title={factionUnits.second.base.name}>
              <Unit unit={factionUnits.second.base} />
            </Section>
          ) : null}
          {factionUnits.second ? (
            <Section title={factionUnits.second.upgrade.name}>
              <Unit unit={factionUnits.second.upgrade} />
            </Section>
          ) : null}
        </SectionGroup>
      ) : null}

      {mech ? (
        <SectionGroup title="Mech">
          <Section title={mech.name}>
            <Text style={{ marginBottom: SPACING }}>{mech.description}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {mech.abilities.map((x) => (
                <UnitAbility
                  style={{ fontWeight: "bold", marginHorizontal: SPACING / 2 }}
                  ability={x}
                />
              ))}
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: -SPACING,
                marginTop: SPACING,
              }}
            >
              <UnitDisplayBox
                style={{ borderRightColor: "#ccc", borderRightWidth: 1 }}
                title="Cost"
                unit={mech}
              />
              <UnitDisplayBox title="Combat" unit={mech} />
            </View>
          </Section>
        </SectionGroup>
      ) : null}

      {flagship ? (
        <SectionGroup title="Flagship">
          <Section title={flagship.name}>
            <Unit unit={flagship} />
          </Section>
        </SectionGroup>
      ) : null}

      <SectionGroup title="Leaders">
        {leaders.agent.map((x) => (
          <Section title={`Agent - ${x.name}`}>
            <IndentedText>{x.description}</IndentedText>
          </Section>
        ))}
        <Section title={`Commander - ${leaders.commander.name}`}>
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
        <Section title={`Hero - ${leaders.hero.name}`}>
          <IndentedText style={{ marginBottom: SPACING }}>
            <SectionSubheader>{leaders.hero.abilityName}</SectionSubheader>
          </IndentedText>
          <IndentedText>{leaders.hero.description}</IndentedText>
        </Section>
      </SectionGroup>
    </ScrollView>
  );
}

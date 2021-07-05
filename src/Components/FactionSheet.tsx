import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { Faction } from "../Models/Faction";
import { getTechColor } from "../Models/Technology";
import { SCREEN_WIDTH, SPACING } from "../../spacing";
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

type HeaderType = keyof IHeaderOffsets;
export interface IHeaderOffsets {
  general: number;
  promissoryNote: number;
  factionAbilities: number;
  factionTechs: number;
  factionUnits: number;
  mech: number;
  flagship: number;
  leaders: number;
}

export function FactionSheet({
  faction,
  onHeaderOffsetChange,
}: {
  faction: Faction;
  onHeaderOffsetChange?: (headerOffsets: IHeaderOffsets) => void;
}) {
  // Deconstruction
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

  // Derived Variables
  const filteredFactionTechs = factionTechs.filter((x) => x !== undefined);

  // Refs
  const scrollViewRef = useRef<ScrollView>(null);

  // State
  const [headerOffsets, setHeaderOffsets] = useState<IHeaderOffsets>({
    general: 0,
    promissoryNote: 0,
    factionAbilities: 0,
    factionTechs: 0,
    factionUnits: 0,
    mech: 0,
    flagship: 0,
    leaders: 0,
  });
  const [gotoMenuOpen, setGotoMenuOpen] = useState(false);

  // Handlers
  const handleHeaderLayoutChange = (header: HeaderType, offset: number) => {
    setHeaderOffsets({
      ...headerOffsets,
      [header]: offset,
    });
  };

  const goToHeader = (header: HeaderType) => {
    if (scrollViewRef && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: headerOffsets[header],
        animated: true,
      });
    }
  };

  useEffect(() => {
    onHeaderOffsetChange?.(headerOffsets);
  }, [headerOffsets]);

  const boxShadowStyles = {
    elevation: 3, 
    shadowOffset: {
      width: 1,
      height: 1
    }, 
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOpacity: 0.2
  }
  
  return (
    <View style={{ width: SCREEN_WIDTH, height: "auto" }}>
      <View>
        <View style={{
          paddingVertical: SPACING,
          backgroundColor: faction.color,
          backfaceVisibility: "visible",
          // ...gotoMenuOpen ? {} : boxShadowStyles
        }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
        </View>
        <Pressable
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            paddingTop: SPACING - 5,
            paddingBottom: SPACING,
            paddingHorizontal: SPACING,
          }}
        >
          <Text
            onPress={() => setGotoMenuOpen(!gotoMenuOpen)}
            style={{ color: "white", padding: SPACING / 2, borderColor: "#fff", borderWidth: 1, borderRadius: 4 }}
          >
            {gotoMenuOpen ? "Close" : "Go-To"}
          </Text>
        </Pressable>
        {gotoMenuOpen ? (
          <View
            style={{
              backgroundColor: faction.color,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: SPACING,
              ...gotoMenuOpen ? boxShadowStyles : {}
            }}
          >
            <Pressable
              style={{ width: "50%", paddingBottom: SPACING }}
              onPress={() => goToHeader("general")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                General
              </Text>
            </Pressable>
            <Pressable
              style={{ width: "50%", paddingBottom: SPACING }}
              onPress={() => goToHeader("promissoryNote")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Promissory Note
              </Text>
            </Pressable>
            <Pressable
              style={{ width: "50%", paddingBottom: SPACING }}
              onPress={() => goToHeader("factionAbilities")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Faction Abilities
              </Text>
            </Pressable>
            <Pressable
              style={{ width: "50%", paddingBottom: SPACING }}
              onPress={() => goToHeader("factionTechs")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Faction Techs
              </Text>
            </Pressable>
            <Pressable
              style={{ width: "50%", paddingBottom: SPACING }}
              onPress={() => goToHeader("mech")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Mech
              </Text>
            </Pressable>
            <Pressable
              style={{ width: "50%", paddingBottom: SPACING }}
              onPress={() => goToHeader("flagship")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Flagship
              </Text>
            </Pressable>
            <Pressable
              style={{ width: "50%" }}
              onPress={() => goToHeader("leaders")}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Leaders
              </Text>
            </Pressable>
          </View>
        ) : null}
      </View>
      <ScrollView
        style={{
          backgroundColor: color,
          paddingHorizontal: SPACING,
        }}
        contentContainerStyle={{ paddingBottom: SPACING * 6 }}
        ref={scrollViewRef}
      >
        <SectionGroup
          title="General"
          onHeaderOffsetChange={(offset) =>
            handleHeaderLayoutChange("general", offset)
          }
        >
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
          <SectionGroup
            title="Promissory Note"
            onHeaderOffsetChange={(offset) =>
              handleHeaderLayoutChange("promissoryNote", offset)
            }
          >
            {promissoryNotes.map((x) => (
              <Section title={x.name}>
                <IndentedText>{x.description}</IndentedText>
              </Section>
            ))}
          </SectionGroup>
        ) : null}

        <SectionGroup
          title="Faction Abilities"
          onHeaderOffsetChange={(offset) =>
            handleHeaderLayoutChange("factionAbilities", offset)
          }
        >
          {abilities.map((ability) => (
            <Section title={ability.name.toUpperCase()}>
              <IndentedText>{ability.description}</IndentedText>
            </Section>
          ))}
        </SectionGroup>

        {filteredFactionTechs.length > 0 ? (
          <SectionGroup
            title="Faction Techs"
            onHeaderOffsetChange={(offset) =>
              handleHeaderLayoutChange("factionTechs", offset)
            }
          >
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
                    <TechIcon
                      type={tech.type}
                      style={{ marginRight: SPACING }}
                    />
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
          <SectionGroup
            title="Faction Units"
            onHeaderOffsetChange={(offset) =>
              handleHeaderLayoutChange("factionUnits", offset)
            }
          >
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
          <SectionGroup
            title="Mech"
            onHeaderOffsetChange={(offset) =>
              handleHeaderLayoutChange("mech", offset)
            }
          >
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
                    style={{
                      fontWeight: "bold",
                      marginHorizontal: SPACING / 2,
                    }}
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
          <SectionGroup
            title="Flagship"
            onHeaderOffsetChange={(offset) =>
              handleHeaderLayoutChange("flagship", offset)
            }
          >
            <Section title={flagship.name}>
              <Unit unit={flagship} />
            </Section>
          </SectionGroup>
        ) : null}

        <SectionGroup
          title="Leaders"
          onHeaderOffsetChange={(offset) =>
            handleHeaderLayoutChange("leaders", offset)
          }
        >
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
    </View>
  );
}

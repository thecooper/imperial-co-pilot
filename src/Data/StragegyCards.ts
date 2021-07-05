import { StrategyCardModel } from "../Models/StrategyCardModel";

export const STRATEGY_CARDS: StrategyCardModel[] = [
  {
    number: 1,
    name: "Leadership",
    color: "#e71d26",
    primary: [
      "Gain 3 command tokens",
      "Spend any amount of influence to gain 1 command token for every 3 influence spent",
    ],
    secondary: [
      "Spend any amount of influence to gain 1 command token for every 3 influence spent",
    ],
  },
  {
    number: 2,
    name: "Diplomacy",
    color: "#fb911c",
    primary: [
      "Choose 1 system other than the Mecatol Rex system that contains a planet you control; each other player places a command token from their reinforcements in the chosen system.  Then, ready each exhausted planet you control in that system.",
    ],
    secondary: [
      "Spend 1 token from your strategy pool and ready up to 2 exhausted planets",
    ],
  },
  {
    number: 3,
    name: "Politics",
    color: "#fff002",
    primary: [
      "Choose a player other than the speaker.  That player gains the speaker token.",
      "Draw 2 action cards.",
      "Look at the top 2 cards of the agenda deck.  Place each card on the top or bottom of the deck in any order.",
    ],
    secondary: [
      "Spend 1 token from your strategy pool to draw 2 action cards.",
    ],
  },
  {
    number: 4,
    name: "Construction",
    color: "#3ab44b",
    primary: [
      "Place 1 PDS or 1 Space Dock on a planet you control",
      "Place 1 PDS on a planet you control.",
    ],
    secondary: [
      "Place 1 token from your strategy pool in any system; you may place either 1 space dock or 1 PDS on a planet you control in that system.",
    ],
  },
  {
    number: 5,
    name: "Trade",
    color: "#06a79c",
    primary: [
      "Gain 3 trade goods.",
      "Replenish commodities.",
      "Choose any number of other players. Those players use the secondary ability of this strategy card without spending a command token.",
    ],
    secondary: [
      "Spend 1 token from your strategy pool to replenish your commodities.",
    ],
  },
  {
    number: 6,
    name: "Warfare",
    color: "#0390d2",
    primary: [
      "Remove 1 of your command tokens from the game board; then, gain 1 command token.",
      "Redistribute any number of the command tokens on your command sheet",
    ],
    secondary: [
      "Spend 1 token from your strategy pool to use the Production ability of 1 of your space docks in your home system (This token is not placed in your home system)",
    ],
  },
  {
    number: 7,
    name: "Technology",
    color: "#13479e",
    primary: [
      "Research 1 technology.",
      "Spend 6 resources to research 1 technology.",
    ],
    secondary: [
      "Spend 1 token from your strategy pool and 4 resources to research 1 technology.",
    ],
  },
  {
    number: 8,
    name: "Imperial",
    color: "#762b8f",
    primary: [
      "Immediately score 1 public objective if you fulfill its requirements.",
      "Gain 1 victory point if you control Mecatol Rex; otherwise, draw 1 secret objective.",
    ],
    secondary: [
      "Spend 1 token from your strategy pool to draw 1 secret objective.",
    ],
  },
];

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FactionSelector } from './Components/FactionSelector';
import { FACTIONS } from './Data/Factions';

export default function App() {
  return (
    <FactionSelector />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

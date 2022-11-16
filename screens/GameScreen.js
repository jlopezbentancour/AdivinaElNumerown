import { Button, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState(10);

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text>La suposicion del oponente</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title="Menor" />
        <Button title="Mayor" />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: 300,
  },
});

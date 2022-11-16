import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Header = ({ title, newStyles }) => {
  return (
    <View style={styles.header}>
      <Text {...newStyles}>Adivina el numero</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 36,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

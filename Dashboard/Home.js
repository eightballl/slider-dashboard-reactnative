import React, { Component } from "react";
import { View, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require('../assets/apotek.png')}
        style={{ width: 194, height: 241 }}
      />
    </View>
  );
}
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Home";
import AboutScreen from "./About";
import ProdukScreen from "./Produk";
import CaraBeli from "./Cara";
import ButtonNavigasi from "../assets/ButtonNavigasi";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        tabBar={(props) => <ButtonNavigasi {...props} />}
        initialRouteName="Home"
      >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Produk" component={ProdukScreen} />
            <Tab.Screen name="Cara Beli" component={CaraBeli} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TabItem from './icon';

const ButtonNavigasi = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: "white"
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            isFocused={isFocused}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1}}
            label={label}
          />
        );
      })}
    </View>
  );
};

export default ButtonNavigasi;

const style = StyleSheet.create({});

import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabItem = ({ onPress, onLongPress, label, isFocused }) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    // Update the document title using the browser API
    if (label === 'Home')
      return isFocused ? setIcon('home') : setIcon('home-outline');

    if (label === 'About')
      return isFocused ? setIcon('alert-circle') : setIcon('alert-circle-outline');

    if (label === 'Produk')
      return isFocused
        ? setIcon('cart')
        : setIcon('cart-outline');

    if (label === 'Cara Beli')
      return isFocused ? setIcon('help') : setIcon('help-outline');
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1, alignItems: 'center' }}>
      <Icon name={icon} size={20} color="black" />
      <Text style={{ color: 'black', fontWeight: isFocused ? 'bold' : 'normal' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

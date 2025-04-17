import { View, TextInput } from 'react-native';
import React from 'react';

import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchBar = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}: {
  onPress?: () => void;
  value: string;
  placeholder: string;
  onChangeText: (text:string) => void;
}) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <EvilIcons name="search" size={25} color="#ab8bff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;

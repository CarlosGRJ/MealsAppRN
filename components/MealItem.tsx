import React from 'react';
import { Text, View } from 'react-native';

interface MealItemProps {
  title: string;
}

const MealItem: React.FC<MealItemProps> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;

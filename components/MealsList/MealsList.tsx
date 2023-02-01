import React from 'react';
import { FlatList, View, ListRenderItem, StyleSheet } from 'react-native';

import Meal from '../../models/meal';
import MealItem, { MealItemProps } from './MealItem';

interface MealsListProps {
  items: Meal[];
}

const MealsList: React.FC<MealsListProps> = ({ items }) => {
  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    const mealItemProps: MealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

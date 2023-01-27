import React, { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItem } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import Meal from '../models/meal';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { RootStackParamList } from '../App';
import MealItem from '../components/MealItem';
import { MealItemProps } from '../components/MealItem';

interface MealsOverviewScreenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MealsOverview',
    undefined
  >;
  route: RouteProp<RootStackParamList, 'MealsOverview'>;
}

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  navigation,
  route,
}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

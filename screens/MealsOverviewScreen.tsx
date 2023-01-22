import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItem } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import Meal from '../models/meal';
import { MEALS } from '../data/dummy-data';
import { RootStackParamList } from '../App';
import MealItem from '../components/MealItem';

interface MealsOverviewScreenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MealsCategories',
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

  const renderMealItem: ListRenderItem<Meal> = (itemData) => {
    return <MealItem title={itemData.item.title} />;
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

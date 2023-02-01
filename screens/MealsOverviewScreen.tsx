import React, { useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import { RootStackParamList } from '../App';
import MealsList from '../components/MealsList/MealsList';

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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

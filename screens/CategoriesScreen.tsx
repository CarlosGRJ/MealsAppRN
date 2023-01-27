import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { RootStackParamList } from '../App';
import Category from '../models/category';

interface CategoriesScreenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Drawer',
    undefined
  >;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const renderCategoryItem: ListRenderItem<Category> = (
    itemData,
  ): JSX.Element => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

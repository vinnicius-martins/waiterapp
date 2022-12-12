import { useState } from 'react';

import { FlatList } from 'react-native';
import { CategoryProps } from '../../types/Category';
import { Text } from '../Text';
import { Category, Icon } from './styles';

interface CategoriesProps {
  categories: CategoryProps[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      contentContainerStyle={{ paddingRight: 24 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <Category
            key={category._id}
            onPress={() => handleSelectCategory(category._id)}
          >
            <Icon>
              <Text opacity={(isSelected || !selectedCategory) ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Icon>

            <Text
              size={14}
              weight='600'
              opacity={(isSelected || !selectedCategory) ? 1 : 0.5}
            >
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}

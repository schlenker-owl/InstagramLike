import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'shop', label: 'Shop' },
  { id: 'style', label: 'Style' },
  { id: 'sports', label: 'Sports' },
  { id: 'auto', label: 'Auto' },
  { id: 'music', label: 'Music' },
  { id: 'food', label: 'Food' },
  { id: 'art', label: 'Art' },
  { id: 'travel', label: 'Travel' },
  { id: 'decor', label: 'Decor' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'diy', label: 'DIY' },
  { id: 'tvmovies', label: 'TV & Movies' },
];

const Categories = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategoryButton
            ]}
            onPress={() => handleCategoryPress(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedCategoryText
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  scrollContent: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: '#EFEFEF',
  },
  selectedCategoryButton: {
    backgroundColor: '#262626',
  },
  categoryText: {
    fontSize: 14,
    color: '#262626',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
});

export default Categories;
import React from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;
const ITEM_HEIGHT = ITEM_WIDTH;
const SPACING = 1;

const ExploreGrid = ({ posts, onPostPress, numColumns = 3 }) => {
  const renderItem = ({ item, index }) => {
    // Determine if this is a featured post (larger)
    const isFeatured = index % 12 === 0 && index !== 0;
    const isVideo = index % 7 === 3;

    let itemStyle = styles.item;
    let containerStyle = styles.itemContainer;

    if (isFeatured) {
      containerStyle = {
        ...containerStyle,
        width: (ITEM_WIDTH * 2) + SPACING,
        height: (ITEM_HEIGHT * 2) + SPACING
      };
      itemStyle = {
        ...itemStyle,
        width: (ITEM_WIDTH * 2) + SPACING,
        height: (ITEM_HEIGHT * 2) + SPACING
      };
    }

    return (
      <TouchableOpacity 
        style={containerStyle} 
        onPress={() => onPostPress(item)}
        activeOpacity={0.9}
      >
        <View style={itemStyle}>
          {/* This would be an Image component in a real app */}
          <View style={[
            styles.itemContent,
            { backgroundColor: getRandomColor(index) }
          ]} />
          
          {isVideo && (
            <View style={styles.videoIndicator}>
              <Icon name="play" size={16} color="#FFFFFF" />
            </View>
          )}
          
          {item.multipleItems && (
            <View style={styles.multipleIndicator}>
              <Icon name="layers" size={16} color="#FFFFFF" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Function to generate random colors for placeholder items
  const getRandomColor = (index) => {
    const colors = [
      '#FADBD8', '#D5F5E3', '#D6EAF8', '#F5EEF8', 
      '#FDEBD0', '#EAEDED', '#F9EBEA', '#F4ECF7'
    ];
    return colors[index % colors.length];
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    padding: SPACING / 2,
  },
  item: {
    width: ITEM_WIDTH - SPACING,
    height: ITEM_HEIGHT - SPACING,
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
  },
  itemContent: {
    width: '100%',
    height: '100%',
  },
  videoIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  multipleIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExploreGrid;
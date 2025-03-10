import React from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Dimensions,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;
const ITEM_HEIGHT = ITEM_WIDTH;
const SPACING = 1;

const ProfilePostsGrid = ({ posts, onPostPress, emptyMessage }) => {
  // If no posts, display an empty state
  if (!posts || posts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="image-outline" size={72} color="#8E8E8E" />
        <Text style={styles.emptyText}>{emptyMessage || 'No Posts Yet'}</Text>
      </View>
    );
  }
  
  const renderPostItem = ({ item, index }) => {
    return (
      <TouchableOpacity 
        style={styles.postItem}
        onPress={() => onPostPress(item)}
        activeOpacity={0.8}
      >
        <View style={styles.postImage}>
          {/* This would be a real image in a production app */}
          <View style={[
            styles.imageContent,
            { backgroundColor: getRandomColor(index) }
          ]} />
          
          {/* Show indicator for multiple photos or video */}
          {(item.type === 'video' || item.type === 'reel') && (
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
      renderItem={renderPostItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      scrollEnabled={false}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    paddingBottom: 20,
  },
  postItem: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    padding: SPACING / 2,
  },
  postImage: {
    width: ITEM_WIDTH - SPACING,
    height: ITEM_HEIGHT - SPACING,
    backgroundColor: '#EFEFEF',
    position: 'relative',
  },
  imageContent: {
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
  emptyContainer: {
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#8E8E8E',
    marginTop: 12,
  },
});

export default ProfilePostsGrid;
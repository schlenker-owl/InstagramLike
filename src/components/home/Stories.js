import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const DUMMY_DATA = [
  { id: 'you', username: 'Your Story', isYou: true },
  { id: '1', username: 'john_doe', isYou: false },
  { id: '2', username: 'jane_smith', isYou: false },
  { id: '3', username: 'robert42', isYou: false },
  { id: '4', username: 'travel_girl', isYou: false },
  { id: '5', username: 'photo_master', isYou: false },
  { id: '6', username: 'food_lover', isYou: false },
  { id: '7', username: 'tech_geek', isYou: false },
];

const StoryItem = ({ username, isYou }) => {
  return (
    <TouchableOpacity style={styles.storyItemContainer}>
      <View style={[
        styles.storyRing, 
        isYou && styles.yourStoryRing
      ]}>
        <View style={styles.storyImageContainer}>
          <View style={styles.storyImage} />
        </View>
      </View>
      <Text 
        style={[styles.username, isYou && styles.yourUsername]} 
        numberOfLines={1}
      >
        {username}
      </Text>
      {isYou && (
        <View style={styles.addStoryBadge}>
          <Text style={styles.addStoryBadgeText}>+</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesScrollView}
      >
        {DUMMY_DATA.map(story => (
          <StoryItem 
            key={story.id} 
            username={story.username} 
            isYou={story.isYou} 
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
    paddingBottom: 10,
  },
  storiesScrollView: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  storyItemContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#E1306C',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourStoryRing: {
    borderColor: '#DBDBDB',
  },
  storyImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EFEFEF',
  },
  username: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center',
    width: 64,
  },
  yourUsername: {
    fontSize: 11,
    color: '#262626',
  },
  addStoryBadge: {
    position: 'absolute',
    bottom: 18,
    right: 10,
    backgroundColor: '#0095F6',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStoryBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Stories;
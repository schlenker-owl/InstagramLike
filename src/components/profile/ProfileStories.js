import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StoryHighlight = ({ highlight, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.storyItem} 
      onPress={() => onPress(highlight)}
    >
      <View style={styles.storyCircle}>
        <View style={styles.storyImage} />
      </View>
      <Text style={styles.storyName} numberOfLines={1}>
        {highlight.name}
      </Text>
    </TouchableOpacity>
  );
};

const ProfileStories = ({ highlights, isCurrentUser, onAddHighlight, onHighlightPress }) => {
  if (!highlights || highlights.length === 0) {
    if (!isCurrentUser) return null;
    
    // Show only the "New" button for current user with no highlights
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.storyItem} 
          onPress={onAddHighlight}
        >
          <View style={styles.storyCircle}>
            <Icon name="plus" size={24} color="#262626" />
          </View>
          <Text style={styles.storyName}>New</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {isCurrentUser && (
          <TouchableOpacity 
            style={styles.storyItem} 
            onPress={onAddHighlight}
          >
            <View style={styles.storyCircle}>
              <Icon name="plus" size={24} color="#262626" />
            </View>
            <Text style={styles.storyName}>New</Text>
          </TouchableOpacity>
        )}
        
        {highlights.map(highlight => (
          <StoryHighlight 
            key={highlight.id} 
            highlight={highlight} 
            onPress={onHighlightPress} 
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  storyCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#EFEFEF',
  },
  storyName: {
    fontSize: 12,
    color: '#262626',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default ProfileStories;
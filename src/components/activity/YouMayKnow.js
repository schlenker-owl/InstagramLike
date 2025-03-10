import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuggestionItem = ({ user }) => {
  const navigation = useNavigation();
  
  const handleUserPress = () => {
    navigation.navigate('UserProfile', { userId: user.id });
  };
  
  const handleFollow = () => {
    // In a real app, this would call an API to follow the user
    console.log(`Following user: ${user.id}`);
  };
  
  return (
    <View style={styles.suggestionItem}>
      <TouchableOpacity 
        style={styles.avatarContainer}
        onPress={handleUserPress}
      >
        <View style={styles.avatar} />
        <Text style={styles.username} numberOfLines={1}>{user.username}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.followButton}
        onPress={handleFollow}
      >
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const YouMayKnow = ({ suggestions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You May Know</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {suggestions.map(user => (
          <SuggestionItem key={user.id} user={user} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingHorizontal: 8,
  },
  suggestionItem: {
    width: 135,
    marginHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#DBDBDB',
    borderRadius: 4,
    padding: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EFEFEF',
    marginBottom: 8,
  },
  username: {
    fontSize: 13,
    fontWeight: '600',
    color: '#262626',
    textAlign: 'center',
  },
  followButton: {
    backgroundColor: '#0095F6',
    borderRadius: 4,
    paddingVertical: 7,
    alignItems: 'center',
  },
  followText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default YouMayKnow;
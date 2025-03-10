import React, { useState, useRef } from 'react';
import { 
  View, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Import components
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileStories from '../../components/profile/ProfileStories';
import ProfileTabBar from '../../components/profile/ProfileTabBar';
import ProfilePostsGrid from '../../components/profile/ProfilePostsGrid';

// Import mock data
import { 
  CURRENT_USER, 
  MOCK_HIGHLIGHTS, 
  MOCK_POSTS,
  MOCK_REELS,
  MOCK_TAGGED
} from '../../data/mockProfile';

const ProfileScreen = ({ navigation, route }) => {
  // If we're viewing another user's profile, we would get their data from route.params
  // For now, we'll assume we're viewing the current user's profile
  const isCurrentUser = !route?.params?.userId;
  const user = isCurrentUser ? CURRENT_USER : CURRENT_USER; // Replace with actual user data lookup
  
  const [activeTab, setActiveTab] = useState('posts');
  const scrollRef = useRef(null);
  
  // Handle navigating to edit profile
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  
  // Handle following a user
  const handleFollowUser = () => {
    // In a real app, this would call an API to follow the user
    console.log(`Following user: ${user.id}`);
  };
  
  // Handle opening menu
  const handleOpenMenu = () => {
    // In a real app, this would open a menu/modal
    console.log('Opening menu');
  };
  
  // Handle adding a new highlight
  const handleAddHighlight = () => {
    // In a real app, this would open the create highlight flow
    console.log('Adding new highlight');
  };
  
  // Handle pressing a highlight
  const handleHighlightPress = (highlight) => {
    // In a real app, this would open the highlight viewer
    console.log(`Opening highlight: ${highlight.id}`);
  };
  
  // Handle pressing on a post
  const handlePostPress = (post) => {
    // In a real app, this would open the post detail screen
    console.log(`Opening post: ${post.id}`);
  };
  
  // Get the appropriate content based on the active tab
  const getTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <ProfilePostsGrid 
            posts={MOCK_POSTS} 
            onPostPress={handlePostPress}
            emptyMessage={
              isCurrentUser 
                ? "Share photos and videos that will appear on your profile."
                : "This user hasn't posted anything yet."
            }
          />
        );
      case 'reels':
        return (
          <ProfilePostsGrid 
            posts={MOCK_REELS} 
            onPostPress={handlePostPress}
            emptyMessage={
              isCurrentUser 
                ? "Create reels to share with your followers."
                : "This user hasn't created any reels yet."
            }
          />
        );
      case 'tagged':
        return (
          <ProfilePostsGrid 
            posts={MOCK_TAGGED} 
            onPostPress={handlePostPress}
            emptyMessage={
              isCurrentUser 
                ? "Photos and videos you're tagged in will appear here."
                : "This user hasn't been tagged in any posts yet."
            }
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="lock-outline" size={16} color="#262626" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{user.username}</Text>
          <Icon name="chevron-down" size={20} color="#262626" />
        </View>
        
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="plus-box-outline" size={24} color="#262626" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={handleOpenMenu}
          >
            <Icon name="menu" size={24} color="#262626" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView ref={scrollRef}>
        {/* Profile Info */}
        <ProfileHeader 
          user={user} 
          isCurrentUser={isCurrentUser}
          onEditProfile={handleEditProfile}
          onFollowUser={handleFollowUser}
        />
        
        {/* Story Highlights */}
        <ProfileStories 
          highlights={MOCK_HIGHLIGHTS}
          isCurrentUser={isCurrentUser}
          onAddHighlight={handleAddHighlight}
          onHighlightPress={handleHighlightPress}
        />
        
        {/* Content Tabs */}
        <ProfileTabBar 
          activeTab={activeTab} 
          onTabChange={(tab) => {
            setActiveTab(tab);
            // Scroll to top when changing tabs
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ y: 0, animated: true });
            }
          }} 
        />
        
        {/* Tab Content */}
        {getTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 16,
    padding: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 4,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileScreen;
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TimeAgo from '../../utils/TimeAgo';

const ActivityItem = ({ activity }) => {
  const navigation = useNavigation();
  
  // Get the appropriate activity text based on type
  const getActivityText = () => {
    switch (activity.type) {
      case 'like':
        return 'liked your photo.';
      case 'comment':
        return `commented: "${activity.comment}"`;
      case 'follow':
        return 'started following you.';
      case 'mention':
        return 'mentioned you in a comment.';
      case 'tag':
        return 'tagged you in a post.';
      case 'follow_request':
        return 'requested to follow you.';
      default:
        return 'interacted with your content.';
    }
  };
  
  // Handle navigation to user profile
  const handleUserPress = () => {
    navigation.navigate('UserProfile', { userId: activity.user.id });
  };
  
  // Handle navigation to the post
  const handlePostPress = () => {
    if (activity.post) {
      navigation.navigate('PostDetail', { postId: activity.post.id });
    }
  };
  
  // Handle following a user
  const handleFollow = () => {
    // In a real app, this would call an API to follow the user
    console.log(`Following user: ${activity.user.id}`);
  };
  
  // Handle accepting a follow request
  const handleAcceptRequest = () => {
    // In a real app, this would call an API to accept the request
    console.log(`Accepting follow request from: ${activity.user.id}`);
  };
  
  // Determine if we should show action buttons
  const showActionButton = activity.type === 'follow' || activity.type === 'follow_request';
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={activity.post ? handlePostPress : handleUserPress}
      activeOpacity={0.7}
    >
      {/* User avatar */}
      <TouchableOpacity 
        style={styles.avatar} 
        onPress={handleUserPress}
        activeOpacity={0.7}
      />
      
      {/* Activity content */}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleUserPress}>
            <Text style={styles.username}>{activity.user.username}</Text>
          </TouchableOpacity>
          <Text style={styles.activityText}>{' '}{getActivityText()}</Text>
          <Text style={styles.timeAgo}>{' '}{TimeAgo(activity.createdAt)}</Text>
        </View>
      </View>
      
      {/* Post thumbnail or action button */}
      {activity.post && (
        <TouchableOpacity 
          style={styles.postThumbnail} 
          onPress={handlePostPress}
        />
      )}
      
      {showActionButton && (
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={activity.type === 'follow_request' ? handleAcceptRequest : handleFollow}
        >
          <Text style={styles.actionButtonText}>
            {activity.type === 'follow_request' ? 'Accept' : 'Follow'}
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EFEFEF',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  username: {
    fontWeight: '600',
    fontSize: 13,
    color: '#262626',
  },
  activityText: {
    fontSize: 13,
    color: '#262626',
  },
  timeAgo: {
    fontSize: 13,
    color: '#8E8E8E',
  },
  postThumbnail: {
    width: 44,
    height: 44,
    backgroundColor: '#EFEFEF',
    marginLeft: 12,
  },
  actionButton: {
    borderRadius: 4,
    backgroundColor: '#0095F6',
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginLeft: 12,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default ActivityItem;
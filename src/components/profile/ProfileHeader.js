import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileHeader = ({ user, isCurrentUser, onEditProfile, onFollowUser }) => {
  return (
    <View style={styles.container}>
      {/* Profile picture and stats row */}
      <View style={styles.topSection}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture} />
          {isCurrentUser && (
            <TouchableOpacity style={styles.addStoryButton}>
              <Icon name="plus" size={14} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.postsCount || 0}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statValue}>{user.followersCount || 0}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statValue}>{user.followingCount || 0}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* User info section */}
      <View style={styles.userInfo}>
        <Text style={styles.displayName}>{user.displayName}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        {user.website && (
          <TouchableOpacity>
            <Text style={styles.website}>{user.website}</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {/* Action buttons */}
      <View style={styles.actionButtons}>
        {isCurrentUser ? (
          <>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={onEditProfile}
            >
              <Text style={styles.primaryButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Promotions</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Insights</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity 
              style={[styles.primaryButton, styles.followButton]}
              onPress={onFollowUser}
            >
              <Text style={styles.followButtonText}>
                {user.isFollowing ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Message</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contactButton}>
              <Icon name="account-plus-outline" size={20} color="#262626" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  profilePictureContainer: {
    marginRight: 24,
    position: 'relative',
  },
  profilePicture: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#EFEFEF',
  },
  addStoryButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0095F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262626',
  },
  statLabel: {
    fontSize: 14,
    color: '#262626',
  },
  userInfo: {
    marginBottom: 12,
  },
  displayName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#262626',
    marginBottom: 4,
    lineHeight: 20,
  },
  website: {
    fontSize: 14,
    color: '#0095F6',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    flex: 1,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  followButton: {
    backgroundColor: '#0095F6',
    borderColor: '#0095F6',
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  contactButton: {
    width: 30,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
});

export default ProfileHeader;
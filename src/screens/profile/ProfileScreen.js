import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>username</Text>
      </View>
      
      <View style={styles.profileInfo}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.bioContainer}>
        <Text style={styles.userName}>Display Name</Text>
        <Text style={styles.bioText}>User bio will appear here</Text>
      </View>
      
      <View style={styles.editProfileContainer}>
        <View style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.emptyText}>No Posts Yet</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileInfo: {
    flexDirection: 'row',
    padding: 15,
  },
  avatarContainer: {
    marginRight: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFEFEF',
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
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E8E',
  },
  bioContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },
  bioText: {
    fontSize: 14,
  },
  editProfileContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 4,
    paddingVertical: 6,
    alignItems: 'center',
  },
  editProfileText: {
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#8E8E8E',
  },
});

export default ProfileScreen;
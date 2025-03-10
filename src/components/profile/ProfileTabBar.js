import React from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileTabBar = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.tab, 
          activeTab === 'posts' && styles.activeTab
        ]}
        onPress={() => onTabChange('posts')}
      >
        <Icon 
          name="grid" 
          size={24} 
          color={activeTab === 'posts' ? '#262626' : '#8E8E8E'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.tab, 
          activeTab === 'reels' && styles.activeTab
        ]}
        onPress={() => onTabChange('reels')}
      >
        <Icon 
          name="play-box-outline" 
          size={24} 
          color={activeTab === 'reels' ? '#262626' : '#8E8E8E'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.tab, 
          activeTab === 'tagged' && styles.activeTab
        ]}
        onPress={() => onTabChange('tagged')}
      >
        <Icon 
          name="tag-outline" 
          size={24} 
          color={activeTab === 'tagged' ? '#262626' : '#8E8E8E'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    borderTopWidth: 0.5,
    borderTopColor: '#DBDBDB',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
});

export default ProfileTabBar;
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

const ActivityTabs = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'you' && styles.activeTab]}
        onPress={() => onTabChange('you')}
      >
        <Text 
          style={[styles.tabText, activeTab === 'you' && styles.activeTabText]}
        >
          You
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.tab, activeTab === 'following' && styles.activeTab]}
        onPress={() => onTabChange('following')}
      >
        <Text 
          style={[styles.tabText, activeTab === 'following' && styles.activeTabText]}
        >
          Following
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8E8E8E',
  },
  activeTabText: {
    color: '#262626',
    fontWeight: '600',
  },
});

export default ActivityTabs;
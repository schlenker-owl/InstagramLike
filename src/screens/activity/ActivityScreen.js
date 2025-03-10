import React, { useState, useRef } from 'react';
import { 
  View, 
  StyleSheet, 
  SafeAreaView, 
  SectionList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import components
import ActivityTabs from '../../components/activity/ActivityTabs';
import ActivityItem from '../../components/activity/ActivityItem';
import ActivitySectionHeader from '../../components/activity/ActivitySectionHeader';
import YouMayKnow from '../../components/activity/YouMayKnow';

// Import mock data
import { 
  TODAY_ACTIVITY, 
  THIS_WEEK_ACTIVITY, 
  THIS_MONTH_ACTIVITY,
  SUGGESTED_USERS
} from '../../data/mockActivity';

const ActivityScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('you');
  const sectionListRef = useRef(null);
  
  // Prepare data for SectionList
  const sectionData = [
    { title: 'Today', data: TODAY_ACTIVITY },
    { title: 'This Week', data: THIS_WEEK_ACTIVITY },
    { title: 'This Month', data: THIS_MONTH_ACTIVITY },
  ];
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Scroll to top when tab changes
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: 0,
        itemIndex: 0,
        animated: true,
      });
    }
  };
  
  // Render a section header
  const renderSectionHeader = ({ section }) => {
    return <ActivitySectionHeader title={section.title} />;
  };
  
  // Render an activity item
  const renderItem = ({ item }) => {
    return <ActivityItem activity={item} />;
  };
  
  // Function to navigate to messages
  const handleMessagesPress = () => {
    navigation.navigate('DirectMessages');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity 
          style={styles.messagesButton}
          onPress={handleMessagesPress}
        >
          <Icon name="message-outline" size={26} color="#262626" />
        </TouchableOpacity>
      </View>
      
      {/* Tabs */}
      <ActivityTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Activity Content */}
      {activeTab === 'you' ? (
        <SectionList
          ref={sectionListRef}
          sections={sectionData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
          ListHeaderComponent={() => <YouMayKnow suggestions={SUGGESTED_USERS} />}
        />
      ) : (
        // "Following" tab content (could be expanded in the future)
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            Activity from people you follow will appear here.
          </Text>
        </View>
      )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  messagesButton: {
    padding: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#8E8E8E',
    textAlign: 'center',
  },
});

export default ActivityScreen;
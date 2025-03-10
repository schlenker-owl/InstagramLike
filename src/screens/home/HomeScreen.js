import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  FlatList, 
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

// Components
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';

// Mock data
import { POSTS } from '../../data/mockPosts';

const HomeScreen = ({ navigation }) => {
  const renderPost = ({ item }) => <Post post={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/instagram-logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="plus-box-outline" size={24} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.navigate('DirectMessages')}
          >
            <Feather name="send" size={24} color="#262626" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <FlatList
        data={POSTS}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Stories />}
      />
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
    paddingHorizontal: 15,
    height: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  logo: {
    height: 30,
    width: 110,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 20,
  },
});

export default HomeScreen;
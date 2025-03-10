// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Instagram</Text>
//       </View>
//       <View style={styles.content}>
//         <Text style={styles.text}>Home Feed</Text>
//         <Text>Posts will appear here</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     height: 44,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#DBDBDB',
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginBottom: 10,
//   },
// });

// export default HomeScreen;
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
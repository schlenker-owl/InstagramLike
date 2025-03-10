import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  SafeAreaView,
  Keyboard,
  ActivityIndicator
} from 'react-native';

// Components
import SearchBar from '../../components/search/SearchBar';
import Categories from '../../components/search/Categories';
import ExploreGrid from '../../components/search/ExploreGrid';

// Mock data
import { EXPLORE_POSTS, getPostsByCategory } from '../../data/mockExplore';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState(EXPLORE_POSTS);
  const [isLoading, setIsLoading] = useState(false);
  
  const gridRef = useRef(null);

  useEffect(() => {
    // Listen for keyboard events to determine if search is active
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsSearchActive(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Only deactivate search if query is empty
        if (searchQuery.length === 0) {
          setIsSearchActive(false);
        }
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [searchQuery]);

  useEffect(() => {
    // Simulate loading posts when category changes
    if (!isSearchActive) {
      loadPostsByCategory(selectedCategory);
    }
  }, [selectedCategory, isSearchActive]);

  const loadPostsByCategory = (categoryId) => {
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      const filteredPosts = getPostsByCategory(categoryId);
      setPosts(filteredPosts);
      setIsLoading(false);
      
      // Scroll to top when changing categories
      if (gridRef.current) {
        gridRef.current.scrollToOffset({ offset: 0, animated: true });
      }
    }, 500);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    // In a real app, you would perform a search against your API
    // For now, we'll just simulate filtering the posts
    if (query.length > 0) {
      setIsSearchActive(true);
      // Filter posts that have the query in the username
      const filteredPosts = EXPLORE_POSTS.filter(post => 
        post.user.username.toLowerCase().includes(query.toLowerCase())
      );
      setPosts(filteredPosts);
    } else if (query.length === 0 && !isSearchActive) {
      // Reset to the selected category if search is not active
      loadPostsByCategory(selectedCategory);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Content loading is handled by the useEffect
  };

  const handlePostPress = (post) => {
    // Navigate to post detail or user profile
    // For now, we'll just log the post
    console.log('Post pressed:', post);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      
      {!isSearchActive && (
        <Categories onCategorySelect={handleCategorySelect} />
      )}
      
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0095F6" />
        </View>
      ) : (
        <ExploreGrid 
          posts={posts} 
          onPostPress={handlePostPress} 
          ref={gridRef}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
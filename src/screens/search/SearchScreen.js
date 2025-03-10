import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#8E8E8E"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Search & Explore</Text>
        <Text>Discover photos, videos, and accounts</Text>
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
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  searchInput: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default SearchScreen;
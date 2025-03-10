import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Home Feed</Text>
        <Text>Posts will appear here</Text>
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
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
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

export default HomeScreen;
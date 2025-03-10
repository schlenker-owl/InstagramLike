import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivitySectionHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#262626',
  },
});

export default ActivitySectionHeader;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ goal }) => {
  return (
    <View style={styles.listItem}>
      <Text>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#efefef',
    borderColor: '#ccc',
    borderWidth: 1
  }
})

export default GoalItem;

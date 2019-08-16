import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(goal.key)}>
      <View style={styles.listItem}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
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

import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([{key: '1', value: 'Get a fulfilling job'}]);

  submitGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal}])
    // setEnteredGoal(''); //Todo: change input back to empty string after submit
  };

  removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  };

  return (
    <View style={styles.container}>
      <GoalInput
        goalHandler={submitGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={removeGoalHandler} goal={itemData.item} /> }
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});

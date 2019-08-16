import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([{key: '1', value: 'Get a fulfilling job'}]);
  const [openModal, setOpenModal] = useState(false);

  submitGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal}]);
    // setEnteredGoal(''); //Todo: change input back to empty string after submit
    setOpenModal(false);
  };

  removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  // modalHandler = () => {
  //   setOpenModal(openModal ? false : true);
  // };

  return (
    <View style={styles.container}>
      <Button title="Add new Goal" onPress={() => setOpenModal(true)} />
      <GoalInput
        goalHandler={submitGoalHandler}
        openModal={openModal}
        setModal={setOpenModal}
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

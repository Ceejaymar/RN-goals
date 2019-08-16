import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState(['Get a fulfilling job']);

  changeTextHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  submitGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
    setEnteredGoal('');
  };

  return (
    <View style={styles.container} >
      <View style={styles.inputGroup} >
        <TextInput
          placeholder='Enter course goal'
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={changeTextHandler}
        />
        <Button title='ADD' onPress={submitGoalHandler} />
      </View>
      <ScrollView>
        {
          courseGoals.map((goal, i) => (
            <View style={styles.listItem} key={i}><Text>{goal}</Text></View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#efefef',
    borderColor: '#ccc',
    borderWidth: 1
  }
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([{key: '1', value: 'Get a fulfilling job'}]);

  changeTextHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  submitGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal}])
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
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      >
      </FlatList>
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

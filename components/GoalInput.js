import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const GoalInput = ({ goalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  changeTextHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputGroup}>
      <TextInput
        placeholder='Enter course goal'
        style={styles.textInput}
        value={enteredGoal}
        onChangeText={changeTextHandler}
      />
      <Button title='ADD' onPress={() => goalHandler(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  }
})

export default GoalInput;

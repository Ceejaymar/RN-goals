import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ goalHandler, openModal, setModal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  changeTextHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  addGoalHandler = () => {
    goalHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={openModal} animationType='slide'>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Enter course goal'
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={changeTextHandler}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={() => setModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    marginVertical: 20
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('yerrr!');
  console.log(outputText);

  return (
    <View style={styles.container}>
      <Text>{ outputText }</Text>
      <Button title="lit button" onPress={() => setOutputText('even litter boiii') } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

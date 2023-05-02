import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ContextProvider } from './Context';
import Navbar from './src/modules/Navbar';
import DigimonItem from './src/modules/DigimonItem';

function App() {

  return (
    <ContextProvider>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Navbar />
      <Text>Digimon App</Text>
      <DigimonItem />
    </View>
    </ContextProvider>
  );

}




const styles = StyleSheet.create({
  
});

export default App;

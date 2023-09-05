import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Calculadora from "./src/components/Calculadora.jsx";
//import SumarArray from "./components/SumarArray";
//import EvaluarArray from './components/EvaluarArray';
//import AgregarNumsMayores10 from "./components/AggregarNumsArr";
//import MostrarDatosMySQL from "./components/MostrarDatosMySQL";

export default function App() {
  
  return (
    <View style={estilos.container}>
      <Calculadora/>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

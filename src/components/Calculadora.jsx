import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const Calculadora = () => {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [numero3, setNumero3] = useState(0);
  const [numero4, setNumero4] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado ] = useState(false);
  const arreglo = [parseInt(numero1), parseInt(numero2),parseInt(numero3), parseInt(numero4)]
  
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const max = () => {
    let mayor = 0;
    let i = 0;
    for(i; i < arreglo.length; i++){
      if (arreglo[i] > mayor)
      {
          mayor = arreglo[i];
      }
  }
    setResultado(mayor);
    setMostrarResultado(true);
    ToastAndroid.show('Se ha encontrado el numero mayor', ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'A5FF33',
      borderWidth: 3,
    },
  });

  return (
    <View >
      <Text>        Mayor</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero1} value={numero1} placeholder="Numero 1" keyboardType="numeric" />

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero2} value={numero2} placeholder="Número 2" keyboardType="numeric" />

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero3} value={numero3} placeholder="Número 3" keyboardType="numeric" />

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero4} value={numero4} placeholder="Número 4" keyboardType="numeric" />

      <Button onPress={max} title="Mayor" color="#A5FF33" />

      {resultado>10 && (<Text>El resultado es {resultado}</Text>)}

    


    </View>
  );
};

export default Calculadora
import * as React from 'react';
import { Text, View, Image, StyleSheet, TochableOpacity } from 'react-native';

export default function Bolofuba() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>  Bolo de Fubá </Text>

      <Image style={styles.img} source={require('../assets/bolo-fuba.jpg')}/>

      <Text style={styles.rec}> Ingredientes: </Text>  

      <Text style={styles.ing}> 3 ovos </Text>
      <Text style={styles.ing}> 2 xícaras (chá) de açúcar </Text>
      <Text style={styles.ing}> 2 xícaras (chá) de fubá </Text>
      <Text style={styles.ing}> 3 colheres (sopa) rasas de farinha de trigo </Text>
      <Text style={styles.ing}> 1/2 copo (americano) de óleo </Text>
      <Text style={styles.ing}> 1 copo de leite </Text>
      <Text style={styles.ing}> 1 colher (sopa) de fermento em pó </Text>
      
    </View>

  );
}

const styles = StyleSheet.create({

    container:{
      flex: 1,
      alignItens:'center',
      backgroundColor: '#CA5239',
      },


    img:{
      width:250,
      height:250,
      margin: 10,
      padding:2,
      alignSelf:'center',
      borderRadius:30,
      },

      title:{
        fontSize:20,
        padding:3,
        textAlign:'center',
        margin:8,
        color:'#FFFFFF',
      },

      rec:{
        fontSize:20,
        padding:3,
        margin:8,
        color:'#FFFFFF',
      },

      ing:{
        fontSize:20,
        padding:2,
        textAlign:'center',
        margin:2,
        color:'#FFFFFF',
      }

  
  }) 


import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Bolochocolate() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Bolo de Chocolate :P </Text>
      <Image style={styles.img} source={require('../assets/bolo-chocolate.jpg')}/>

      <Text style={styles.rec}> Ingredientes: </Text>  

      <Text style={styles.ing}> 4 ovos </Text>
      <Text style={styles.ing}> 4 colheres (sopa) de chocolate em pó </Text>
      <Text style={styles.ing}> 2 colheres (sopa) de manteiga </Text>
      <Text style={styles.ing}> 3 xícaras (chá) de farinha de trigo </Text>
      <Text style={styles.ing}> 2 xícaras (chá) de açúcar </Text>
      <Text style={styles.ing}> 2 colheres (sopa) de fermento </Text>
      <Text style={styles.ing}> 2 colheres (sopa) de fermento </Text>
      <Text style={styles.ing}> 1 xícara (chá) de leite </Text>

      
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

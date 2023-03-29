import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Bolomilho() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Bolo de Milho </Text>
      <Image style={styles.img} source={require('../assets/bolo-milho.jpg')}/>
      
      <Text style={styles.rec}> Ingredientes: </Text>  

      <Text style={styles.ing}> 1 lata de milho (sem o líquido) </Text>
      <Text style={styles.ing}> 1 lata de leite (medida da lata de milho) </Text>
      <Text style={styles.ing}> 1 lata de açúcar (medida da lata de milho) </Text>
      <Text style={styles.ing}> 1 lata de flocão de milho </Text>
      <Text style={styles.ing}> 1/2 lata de óleo de soja </Text>
      <Text style={styles.ing}> 3 ovos inteiros </Text>
      <Text style={styles.ing}> 1 colher (sopa) de fermento em pó </Text>
      <Text style={styles.ing}> 1 xícara (chá) de leite </Text>
      <Text style={styles.ing}> 1 colher (sopa) de fermento em pó </Text>
      <Text style={styles.ing}> farinha de trigo </Text>

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


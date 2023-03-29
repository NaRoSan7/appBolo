import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> As Melhores Receitas de Bolo </Text>
      <Image style={styles.img} source={require('../assets/boloo.jpg')}/>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BoloChocolate');
        }}>
        <Text style={styles.opc}> Bolo de Chocolate </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BoloMilho');
        }}>
        <Text style={styles.opc}> Bolo de Milho </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('BoloFuba');
        }}>
        <Text style={styles.opc}> Bolo de Fuba </Text>
      </TouchableOpacity>
    </View>

    )
  }  
  const styles=StyleSheet.create({
     
      container:{
        flex: 1,
        alignItens:'center',
        backgroundColor: '#b71777',
      },

      title:{
        fontSize:20,
        padding:3,
        textAlign:'center',
        margin:8,
        color:'#FFFFFF'
      },

      img:
      {
        margin: 10,
        padding:2,
        alignSelf:'center',
        borderRadius:30,
      },

      opc:
      {
        fontSize:20,
        borderRadius:10,
        backgroundColor:'#ecb2ee',
        padding:5,
        margin:15,
        textAlign:'center',
        borderWidth:2,
      }






    });
  

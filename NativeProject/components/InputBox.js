import React from 'react'
import CustomButton from './CustomButton';
import { StyleSheet, Text, View,Button,Alert,TextInput,ScrollView,FlatList} from 'react-native';

function InputBox(props) {
  return (
    <View style={styles.inputContainer}>
    <TextInput onChangeText={text=>props.setGol(text)} value={props.goal} style={styles.inputText} placeholder='Enter you goals'/>
    <CustomButton onPress={()=>props.clickHandler()} title='Add Goal' />
  </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      flex:1
  
    },
    inputText:{
      width:'70%',
      padding:10,
      borderWidth:1,
      borderColor:'grey',
      borderRadius:5,
      fontSize:16,
      // marginBottom:15,
    },
  });

export default InputBox
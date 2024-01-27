import React from 'react'
import {Text, View,TextInput,ScrollView,FlatList,StyleSheet} from 'react-native';


function GaolList(props) {
  return (
    <FlatList data={props.goalList}
    renderItem={(itemData)=>{
      return(
        <View style={styles.goalBox}>
        <Text style={{color:'white'}}>
          {itemData.item.text}
        </Text>
        </View>
      )
    }}
    />
  )
}

const styles = StyleSheet.create({
    goalBox:{
        backgroundColor:'#7d21de',
        marginTop:10,
        padding:12,
        color:'white',
        borderRadius:10
      },
})

export default GaolList
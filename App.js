import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,TextInput,ScrollView,FlatList} from 'react-native';
import CustomButton from './components/CustomButton';
import { useState } from 'react';
import InputBox from './components/InputBox';
import GaolList from './components/GaolList';

export default function App() {
  const [goal, setGol] = useState()
  const [goalList, setGolList] = useState([])

  const clickHandler = ()=>{
    setGolList(currentGoals=>[...currentGoals, {text:goal}])
    setGol('')
    
  }

  return (
    <View style={styles.container}>
      <InputBox goal={goal} setGol={setGol} clickHandler={clickHandler}/>
      <View style={{borderBottomWidth:1, marginTop:10, borderColor:'grey'}} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView >
        {goalList.map((item,index)=>
        <View style={styles.goalBox} key={index}>
        <Text style={{color:'white'}}>
          {item}
        </Text>
        </View>
          )}
        </ScrollView> */}
        <GaolList goalList={goalList} />
        </View>

      

    
    </View>
  );
}
{/* <TextInput style={styles.text} placeholder='type here'/>
<Text style={styles.text}>Press this button.</Text>
<Button style={styles.button}
  title="Press me"
  onPress={() => clickHandler()}
/>
< CustomButton title={"Custom Button"} />
<StatusBar style="auto" /> */}
const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal:30,
    flex: 1,
    // backgroundColor: '#e4e5f1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
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

  text:{
    borderWidth: '2',
    borderColor:'red',
    fontSize: '19',
    padding:10,
    width:200,
    margin:5


  },
  button:{
    marginBottom:15


  },
  goalBox:{
    backgroundColor:'#7d21de',
    marginTop:10,
    padding:12,
    color:'white',
    borderRadius:10
  },


  goalsContainer:{
    flex:6,
    marginTop:20
  }

});

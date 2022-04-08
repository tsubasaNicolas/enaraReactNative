import { Alert, GestureResponderEvent, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


let  board = [
  "L","I","S","T",
  "O","F","A","T",
  "S","T","R","S",
  "O","R","A","Y"
    ]
  ;

  const dictionary= [
    "array",
    "arrays",
    "art",
    "arts",
    "bag",
    "bee",
    "bog",
    "dog",
    "fall",
    "fast",
    "fat",
    "fell",
    "fig",
    "fill",
    "fist",
    "gap",
    "hello",
    "hoop",
    "jack",
    "job",
    "jog",
    "keg",
    "kick",
    "lift",
    "lifts",
    "lire",
    "list",
    "load",
    "loaf",
    "loan",
    "loft",
    "log",
    "lost",
    "lure",
    "lust",
    "man",
    "mic",
    "mice",
    "milk",
    "opal",
    "pan",
    "pee",
    "pin",
    "polk",
    "poo",
    "pop",
    "rant",
    "rat",
    "rats",
    "rent",
    "rest",
    "rust",
    "sat",
    "soft",
    "sort",
    "soy",
    "start",
    "starts",
    "street",
    "tar",
    "tart",
    "tarts",
    "toy",
    "toys",
    "tray",
    "trays"
  ];

  board = board.sort(() => Math.random() - 0.5)



  const [lista, setLista] = useState(board);
  const [word, setWord] = useState('');
  const [count, setCount] = useState('')
  const [dicc, setDicc] = useState(dictionary)


  useEffect(() => {
if(dicc.find(element => element == word.toLowerCase())== undefined){
  console.log('palabra no encontrada')
}
else{
 alert('Palabra ' + word + ' encontrada. Busca una nueva palabra');
 setWord('');

}
    console.log('word '+ word);
  }, [word])
  


const onPress2 = (y:string) => {
  setWord(prevCount => prevCount + y);
  console.log(count)
}

  return (
    <ScrollView>
    <View 
   style={styles.container}
    >
    <View style={styles.grid}>
      {
       lista.map((x,i)=>(
         <TouchableOpacity  onPress={() => onPress2(x)} key={i} >
            <Text  style={styles.title}> {x}</Text>
         </TouchableOpacity>
        ))
      }
</View>

</View>
<View>
  <TextInput value={word} style={{backgroundColor:'white', width:200,marginLeft:40, marginTop:40}}/>
</View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid:{
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    width:'90%',
    

  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin:4,
    fontSize: 20,
    fontWeight: 'bold',
    width:70,
    height:70,
    //color:'tomato'
    backgroundColor:'teal',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

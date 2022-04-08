import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  var arr = [
    "L","I","S","T",
    "O","F","A","T",
    "S","T","R","S",
    "O","R","A","Y"
  ]
/*
  function listToMatrix(list :Array<string>, elementsPerSubArray:number) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}
*/
 // var matrix = listToMatrix(arr, 4);

  function getNeighbours(col:number, row:number)
{
  var w = 4;
  
  var start = (row > 0 ? row * w - w : row * w) + (col > 0 ? col - 1 : col);
  var rowSpan = ((row > 0 ? 2 : 1) + (row < (w - 1) ? 1 : 0)) * w;
  var colSpan = (col > 0 ? 2 : 1) + (col < (w -1) ? 1 : 0);
  console.log('array '+ arr)
  
  var center = col + row * w;
  var result = [];
  for (var r = start; r < start + rowSpan; r += w)  
    for (var i = r; i < r + colSpan; i++)
      if (!(i === center))
         result.push(arr[i]);
      
  return  console.log(result);
 
}
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>getNeighbours(1,1)} >
      <Text  style={styles.title}>Find</Text>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import * as React from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import {Table,Rows} from 'react-native-table-component';

const tableData =[
  ['ABBREVIATIONS',''],
  ['ASAP','As Soon As Possible'],
  ['FYI','For Your Information'],
  ['LOL','Laugh Out Loud'],
  ['OMG','Oh My God'],
  ['RESVP','Répondez s`il vous plaît (Please respond)'],
  ['DIT','Do It Yourself'],
  ['ETA','Estimated Time of Arrival'],
  ['CEO','Chief Executive Officer'],
  ['FAQ','Frequently Asked Questions'],
  ['FYE','Fiscal Year End'],
  ['HR','Human Resources'],
  ['TBD','To Be Determined'],
  ['VIP','Very Important Person'],
  ['BTW','By The Way'],
  ['USA','United States of America']
];
export default AbbreviationApp=({navigation})=> {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../image/abbreviation.jpg')}>
        <Text style={styles.headText}>ABBREVIATIONS</Text>
        <Table borderStyle={styles.tableBorderStyle}>
          <Rows data={tableData.slice(1)} textStyle={styles.rowText} />
        </Table>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, alignContent:'center'},
  tableBorderStyle: { borderWidth: 1, borderColor: 'darkblue' },
  headText: { textAlign: 'center', fontWeight: 'bold', padding:10,backgroundColor:'lightblue', borderRadius:10, margin:10},
  rowText: { textAlign: 'center' },
});

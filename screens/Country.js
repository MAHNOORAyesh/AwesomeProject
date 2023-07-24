import * as React from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import {Table,Row,Rows} from 'react-native-table-component';

const tableData =[
  ['COUNTRIES','CAPITAL','LANGUAGE','RELIGION','CURRENCY'],
  ['UNITED STATES (US)','Washington D.C','English','Christianity','US Dollar (USD)'],
  ['CHINA','Beijing','Mandarin Chinese','Buddhism','Chinese Yuan (CNY)'],
  ['RUSSIA','Moscow','Russian','Christianity','Russian Ruble (RUB)'],
  ['BRAZIL','Brasília','Portuguese','Christianity','Brazilian Real (BRL)'],
  ['PAKISTAN','Islamabad','Urdu','Islam','Pakistani Rupee'],
  ['AUSTRALIA','Canberra','English','Christianity','Australian Dollar (AUD)'],
  ['INDIA','New Delhi','Hindi','Hinduism','Indian Rupee (INR)'],
  ['JAPAN','Tokyo','Japanese','Shintoism','Japanese Yen (JPY)'],
  ['GERMANY','Berlin','German','Christianity','Euro (EUR)'],
  ['UNITED KINGDOM (UK)','London','English','Christianity','British Pound (GBP)'],
  ['SOUTH KOREA','Seoul','Korean','Christianity','South Korean Won (KRW)']
];
export default CountriesApp=({navigation})=> {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../image/country.jpg')}>
        <Text
          style={{
            textAlign: 'center', fontWeight: 'bold', padding: 10, backgroundColor: 'lightblue',
            borderRadius: 10, margin: 10
          }}>
          COUNTRIES
        </Text>
        <Table borderStyle={styles.tableBorderStyle}>
          <Row data={tableData[0]} style={styles.head} textStyle={styles.headText} />
          <Rows data={tableData.slice(1)} textStyle={styles.rowText} />
        </Table>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  tableBorderStyle: { borderWidth: 1, borderColor: '#c8e1ff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { textAlign: 'center', fontWeight: 'bold',fontSize:12},
  rowText: { textAlign: 'center',fontSize:10 },
});
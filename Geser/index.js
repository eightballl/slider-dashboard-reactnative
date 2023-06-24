import React from 'react';
import { View, Text,StatusBar, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Apotek Jaya',
    text: 'Selamat Datang',
    image: require('../assets/apotek.png'),
  },
  {
    title: 'Pakai Masker',
    text: 'Aplikasi Ini Adalah Untuk Menyediakan Pengobatan di UDB',
    image: require('../assets/apotek.png'),
  },
  {
    title: 'Patuhi Protokol',
    text: 'Aplikasi Ini Adalah Untuk Menyediakan Pengobatan di UDB',
    image: require('../assets/apotek.png'),
  },
  {
    title: 'Selamat Datang',
    text: "Klik Selesai Untuk Masuk Ke beranda",
    image: require('../assets/apotek.png'),
  },
];

const Geser = (props) => {
  const renderItem =({item})=>{
    return(
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={item.image}></Image>
          <View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
    )
  }
  
  const keyExtractor =(item) => item.title;

  const renderDoneButton = () =>{
    return(
      <View style={styles.viewtombolselesai}>
        <Text style={styles.tombolselesai}>Selesai</Text>
      </View>
    )
  }
  const renderNextButton = () =>{
    return(
      <View style={styles.viewtombolnext}>
        <Text style={styles.tombolnext}>Selanjutnya</Text>
      </View>
    )
  }
  
  const handleDone = () =>{
    props.handleDone();
  }
  
    
  return (
    <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
          onDone={handleDone}
        />
      </View>
  )
}
const styles =StyleSheet.create({

  slide:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'black',
    fontSize:28,
    marginHorizontal:20,
    marginTop:20
  },
  text:{
    color:'black',
    textAlign: 'center',
    fontSize:14,
    marginHorizontal:20,
    marginTop:20
  },
  image:{
    marginVertical:2
  },
  viewtombolselesai:{
    width:60,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  tombolselesai:{
    color:'blue',
    fontSize:18
  },
  viewtombolnext:{
    width:100,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  tombolnext:{
    color:'blue',
    fontSize:18
  },
  dotStyle:{
    backgroundColor:'red'
  },
  activeDotStyle:{
    backgroundColor:'blue'
  },
  
})

export default Geser
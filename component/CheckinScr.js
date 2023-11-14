import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';

const DailyAttendanceScreen = () => {
  const [isPresent, setIsPresent] = useState(false);

  const handleAttendance = () => {
    setIsPresent(!isPresent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.txttitle}>
          <Text style={styles.title}>Điểm Danh Hằng Ngày</Text>
          <Text style={styles.title}>Đổi ưu đãi</Text>
        </View>
          <Image style={{width:windowWidth, height:100}} source={require('../assets/hangTV.png')}/>
        <View Style={styles.checkin}>
          <View style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: '#0066FF',}}>
            <Image source={require('../assets/checkin.png')} style={{width:windowWidth, height:100, marginBottom:10}}/>
            <TouchableOpacity
              style={styles.button}
              onPress={handleAttendance}
            >
              <Text style={styles.buttonText}>
                {isPresent ? 'Đã điểm danh' : 'Chưa điểm danh'}
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 12, color: '#66CCFF', marginBottom: 5}}>Điểm danh đủ bảy ngày để nhận thêm ưu đãi</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{padding: 10,backgroundColor: "#DDDDDD", }}>
          <View style={styles.scroll}>
            <View style={styles.item}>
              <Image source={require('../assets/itemimg.png')} style={{width: 350, height:80}}/>
              <Text style={styles.description}>Đi Be càng nhiều quà càng to!</Text>
              <Image style={{width: 60, height: 20, marginBottom: 15}} source={require('../assets/be500.png')}/>
            </View>
            <View style={styles.item}>
              <Image source={require('../assets/itemimg.png')} style={{width: 350, height:80}}/>
              <Text style={styles.description}>Đi Be càng nhiều quà càng to!</Text>
              <Image style={{width: 180, height: 20, marginBottom: 15}} source={require('../assets/20.png')}/>
            </View>
            <View style={styles.item}>
              <Image source={require('../assets/itemimg.png')} style={{width: 350, height:80}}/>
              <Text style={styles.description}>Đi Be càng nhiều quà càng to!</Text>
              <Image style={{width: 60, height: 20, marginBottom: 15}} source={require('../assets/be500.png')}/>
            </View>
            <View style={styles.item}>
              <Image source={require('../assets/itemimg.png')} style={{width: 350, height:80}}/>
              <Text style={styles.description}>Đi Be càng nhiều quà càng to!</Text>
              <Image style={{width: 180, height: 20, marginBottom: 15}} source={require('../assets/20.png')}/>
            </View>
          </View>
        </ScrollView>
      </View>
      
      
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#DDDDDD',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 10,
    marginLeft: 10
  },
  button: {
    backgroundColor: '#FFFF33',
    padding: 10,
    borderRadius: 5,
  },
  // buttonText: {
  //   color: '#FFFFFF',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  item: {
    flex: 2,
    width: 350,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
 },
  description: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop:10,

  },  
  header:{
    flex: 1,

  },
  txttitle:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkin:{
    flex: 1,
    backgroundColor: '#0066FF'
  },
  scroll:{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   
  },
};

export default DailyAttendanceScreen;


          // <Stack.Navigator>
          //   <Stack.Screen name="Nạp Mạng" options={{headerShown: false}} component={NapMang}/>
          //   <Stack.Screen name="Hoạt động" component={HoatDong}/>
          // </Stack.Navigator>
          
import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, Dimensions, TouchableHighlight, Pressable, TextInput } from 'react-native';
import { View, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import HoatDong from './hoatDong';
const NapMang = ({navigation}) =>{
  const [phonenumber, setphonenumber] = useState("  ");
    const [currentView, setCurrentView] = useState('view1');

    const switchToView1 = () => {
        setCurrentView('view1');
      };
    
      const switchToView2 = () => {
        setCurrentView('view2');
      };

      const switchToView3 = () => {
        setCurrentView('view3');
      };
    
      const switchToView4 = () => {
        setCurrentView('view4');
      };
      return(
        <SafeAreaView style = {styles.container}>
          <View style = {styles.header}>
            <Text style={{fontSize:20, fontWeight:'bold', left: 10}}>Nạp tiền điện thoại</Text>
            <Pressable onPress={() => {navigation.navigate('Hoạt động')}}>
              <Text style={{fontSize: 16, color: '#3399FF', fontWeight:'bold', right: 13}}>Xem lịch sử</Text>
            </Pressable>
          </View>
          <View style = {styles.btn}>
            <TouchableOpacity style = {styles.btnView} onPress={switchToView1}>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>Nạp ĐT</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnView} onPress={switchToView2}>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>Nạp 3G/4G</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnView} onPress={switchToView3}>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>Thẻ ĐT</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnView} onPress={switchToView4}>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>Thẻ 3G/4G</Text>
            </TouchableOpacity>
          </View>
          {currentView==='view1' &&(
            <ScrollView style = {styles.view} contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }}>
              <View>
                <Image source={require('../assets/view1_3g.png')} style={{height: 95, width: 370, borderRadius: 10, bottom:5}}/>
              </View>
              <View style={{flex:1, flexDirection: 'row'}}>
                <Image source={require('../assets/vina.png')} style={{height: 70, width: 70}}/>
              
                <View style={{flex: 1, flexDirection:'row'}}>
                  <View style={{flex:1, flexDirection: 'column' , position: 'absolute', left: 10, justifyContent:'center', alignItems: 'flex-start', top: 14}}> 
                    <Text style={{fontSize: 12, fontWeight:'bold', color: '#999999'}}>Nguyễn Đình Chương</Text>
                    <Text style={{fontSize: 16, color: '#999999'}}>0945349387</Text>
                  </View>
                  <TextInput style={{height: 70, width: 300, borderRadius: 12, backgroundColor:'white'}} />               
                  <Image source={require('../assets/danhba.png')} style={{height: 35, width: 35, position: 'absolute', left: 250, top:15}}/>
                </View>
              </View>
              <View style={{flex: 1, top: 10}}>
                <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>CHỌN MỆNH GIÁ</Text>
                <View>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 15}}>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>10.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 9.900đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>20.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 19.800đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>30.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 29.700đ</Text>
                    </View>
                  </View>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 25}}>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>50.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 49.500đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>100.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 99.000đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>200.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 198.000đ</Text>
                    </View>
                  </View>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 35}}> 
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>300.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 297.000đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>500.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 495.000đ</Text>
                    </View>
                    <View style={{ width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    </View>
                  </View>
                </View>
              </View>
              <View style={{flex:1, alignItems: 'center', top: 200}}>
                <TouchableOpacity style={{backgroundColor: '#DDDDDD', width: 200, flex:1, justifyContent:'center', alignItems:'center', borderRadius: 10, height: -150}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#AAAAAA'}}>Tiếp tục</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            
          )}

          {currentView==='view2' &&(
            <ScrollView style = {styles.view} contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }}>
            <View>
              <Image source={require('../assets/view1_3g.png')} style={{height: 95, width: 370, borderRadius: 10, bottom:5}}/>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
              <Image source={require('../assets/vina.png')} style={{height: 70, width: 70}}/>
            
              <View style={{flex: 1, flexDirection:'row'}}>
                <View style={{flex:1, flexDirection: 'column' , position: 'absolute', left: 10, justifyContent:'center', alignItems: 'flex-start', top: 14}}> 
                  <Text style={{fontSize: 12, fontWeight:'bold', color: '#999999'}}>Nguyễn Đình Chương</Text>
                  <Text style={{fontSize: 16, color: '#999999'}}>0945349387</Text>
                </View>
                <TextInput style={{height: 70, width: 300, borderRadius: 12, backgroundColor:'white'}} />               
                <Image source={require('../assets/danhba.png')} style={{height: 35, width: 35, position: 'absolute', left: 250, top:15}}/>
              </View>
            </View>
            <View style={{flex: 1, top: 10}}>
              <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>GÓI 30 NGÀY</Text>
              <View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 15}}>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>1GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>20.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>18.400đ</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>3GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>60.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>55.200</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>5GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>100.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>92.000đ</Text>
                  </View>
                </View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 25}}>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>8GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>160.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>147.200đ</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>10GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>185.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>170.200đ</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>12GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>220.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>202.400đ</Text>
                  </View>
                </View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 35}}> 
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>15GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>275.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>253.000đ</Text>
                  </View>
                  <View style={{ width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>

                  </View>
                  <View style={{ width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1,top: 200}}>
              <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>GÓI 7 NGÀY</Text>
              <View>
                <View style = {{flex: 1, alignItems: 'flex-start', top:15, height: 70}}>
                  <View style={{backgroundColor: 'white', width: 130, height: 70, flex: 1, borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>1GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>20.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>18.400đ</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex:1, alignItems: 'center', top: 220}}>
              <TouchableOpacity style={{backgroundColor: '#DDDDDD', width: 200, flex:1, justifyContent:'center', alignItems:'center', borderRadius: 10, height: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#AAAAAA'}}>Tiếp tục</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          )}

          {currentView==='view3' &&(
            <ScrollView style = {styles.view} contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }}>
              <View style={{flex: 1, top: 10}}>
                <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>CHỌN NHÀ MẠNG</Text>
                <View style={{flex:1, flexDirection: 'row', justifyContent:'space-around'}}>
                  <Image style={{height: 70, width: 70}} source={require('../assets/gmobile.png')}/>
                  <Image style={{height: 70, width: 70}} source={require('../assets/mobi.png')}/>
                  <Image style={{height: 70, width: 70}} source={require('../assets/vnmobi.png')}/>
                  <Image style={{height: 70, width: 70}} source={require('../assets/viettell.png')}/>
                  <Image style={{height: 70, width: 70}} source={require('../assets/vina.png')}/>
                </View>
              </View>
              <View style={{flex: 1, top: 10}}>
                <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>CHỌN MỆNH GIÁ</Text>
                <View>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 15}}>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>20.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 19.800đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>30.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 29.700đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>50.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 49.500đ</Text>
                    </View>
                  </View>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 25}}>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>100.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 99.000đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>200.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 198.000đ</Text>
                    </View>
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>300.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 297.000đ</Text>
                    </View>
                  </View>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 35}}> 
                    <View style={{backgroundColor: 'white', width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>500.000đ</Text>
                      <Text style={{fontSize: 14, color: '#BBBBBB'}}>Giá: 497.000đ</Text>
                    </View>
                    <View style={{ width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                      
                    </View>
                    <View style={{ width: 90, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    </View>
                  </View>
                </View>
              </View>
              
              <TouchableOpacity style={{flex: 0.5}}>
                <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between', backgroundColor: 'white', top: 170, borderRadius: 10, alignItems: 'center'}}>
                  <Text style={{fontSize: 20, color: '#3399FF', left: 20}}>Các thẻ đã mua</Text>
                  <Image style={{width:20, height: 20, }} source={require('../assets/muiten.png')}/>
                </View>
              </TouchableOpacity>
                
        
              <View style={{flex:1, alignItems: 'center', top: 200}}>
                <TouchableOpacity style={{backgroundColor: '#DDDDDD', width: 200, flex:1, justifyContent:'center', alignItems:'center', borderRadius: 10, height: -150}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#AAAAAA'}}>Tiếp tục</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}

          {currentView==='view4' &&(
            <ScrollView style = {styles.view} contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }}>
              <View>
                <Image source={require('../assets/view2_3g.png')} style={{height: 95, width: 370, borderRadius: 10, bottom:5}}/>
              </View>
              <View style={{flex: 1, top: 10}}>
                <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>CHỌN NHÀ MẠNG</Text>
                <View style={{flex:1, flexDirection: 'row', alignContent:'flex-start', top: 10}}>
                  <Image style={{height: 70, width: 70}} source={require('../assets/gmobile.png')}/>
                  <Image style={{height: 70, width: 70}} source={require('../assets/mobi.png')}/>
                </View>
              </View>
              <View style={{flex: 1, top: 30}}>
              <Text style={{fontSize: 14, fontWeight:'bold', color: '#999999'}}>GÓI 30 NGÀY</Text>
              <View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 15}}>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>1.2GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>20.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>19.000đ</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>3GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>50.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>47.500</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>5GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>70.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>66.500đ</Text>
                  </View>
                </View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: 25}}>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>8GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>100.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>95.000đ</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>12GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>120.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>114.200đ</Text>
                  </View>
                  <View style={{backgroundColor: 'white', width: 90, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 4, borderRightColor: '#EEEEEE', borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', color: 'black'}}>15GB</Text>
                    <Text style={{fontSize: 14, color: '#BBBBBB', textDecorationLine: 'line-through'}}>150.000đ</Text>
                    <Text style={{fontSize: 18, color: '#999999', }}>142.500đ</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={{flex: 0.5}}>
                <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between', backgroundColor: 'white', top: 170, borderRadius: 10, alignItems: 'center'}}>
                  <Text style={{fontSize: 20, color: '#3399FF', left: 20}}>Các thẻ đã mua</Text>
                  <Image style={{width:20, height: 20, }} source={require('../assets/muiten.png')}/>
                </View>
              </TouchableOpacity>
                
        
              <View style={{flex:1, alignItems: 'center', top: 200}}>
                <TouchableOpacity style={{backgroundColor: '#DDDDDD', width: 200, flex:1, justifyContent:'center', alignItems:'center', borderRadius: 10, height: -150}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#AAAAAA'}}>Tiếp tục</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}    
        </SafeAreaView>
      );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    position: 'relative'
  },
  header:{
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn:{
    flex: 0.15,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 5
  },
  view:{
    flex:5,
    height: windowHeight,
    backgroundColor: '#EEEEEE',
  },
  btnView:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#EEEEEE',
    borderRightWidth:4,
    borderRightColor: 'white',
    borderRadius: 15,
    
  }
});

export default NapMang;
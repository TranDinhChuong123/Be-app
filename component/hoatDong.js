        // // <Stack.Navigator>
        //   //   <Stack.Screen name="Đặt vé xe" options={{headerShown: false}} component={ManHinhDatVeXe}/>
        //     <Stack.Screen name="Hoạt động" component={HoatDong}/>
        //     <Stack.Screen name="Nạp Mạng" options={{headerShown: false}} component={NapMang}/>
        //   // </Stack.Navigator>
          import React, { useState, useEffect } from 'react';
          import { FlatList, ScrollView, TouchableOpacity, Dimensions, TouchableHighlight, Pressable, TextInput } from 'react-native';
          import { View, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
          import NapMang from './napData';
          import ManHinhDatVeXe from './bookcartik';
          
          const HoatDong = () => {
              const [currentView, setCurrentView] = useState('view6');
          
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
          
                const switchToView5 = () => {
                  setCurrentView('view5');
                };
              
                const switchToView6 = () => {
                  setCurrentView('view6');
                };
          
              return(
                  <SafeAreaView style={styles.container}>
                      <ScrollView horizontal={true} style = {styles.btn} contentContainerStyle={{padding: 10,backgroundColor: "white", flex: 3,flexDirection:'row', alignItems: 'center',justifyContent: 'space-around',paddingLeft: 260}}>
                          <TouchableOpacity style = {styles.btnView} onPress={switchToView1}>
                              <Text style={{fontSize: 16, fontWeight:'bold', color: '#999999'}}>Đặt xe</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.btnView} onPress={switchToView2}>
                              <Text style={{fontSize: 16, fontWeight:'bold', color: '#999999'}}>Ăn uống</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.btnView} onPress={switchToView3}>
                              <Text style={{fontSize: 16, fontWeight:'bold', color: '#999999'}}>Giao hàng</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.btnView} onPress={switchToView4}>
                              <Text style={{fontSize: 16, fontWeight:'bold', color: '#999999'}}>Vé máy bay</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.btnView} onPress={switchToView5}>
                              <Text style={{fontSize: 16, fontWeight:'bold', color: '#999999'}}>Vé xe khách</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style = {styles.btnView6} onPress={switchToView6}>
                              <Text style={{fontSize: 16, fontWeight:'bold', color: '#999999'}}>Nạp Điện thoại</Text>
                          </TouchableOpacity>
                      </ScrollView>
          
                      {currentView === 'view1' && <View style = {styles.view}>
                              <Image source={require('../assets/motor_tick.png')} style={{width: 150, height: 150}}/>
                              <Text style={styles.txt}>Bạn chưa đặt chuyến xe nào. Đặt chuyến</Text>
                              <Text style={styles.txt}>xe đầu tiên ngay và sử dụng nhiều ưu đãi</Text>
                              <Text style={styles.txt}>từ Be!</Text>
                              <TouchableOpacity style={{backgroundColor: '#FFCC33',top: 15, width: 150, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 12}}>
                                  <Text style={{fontSize: 20, fontWeight: 'bold', bottom: 2}}>Đặt ngay</Text>
                              </TouchableOpacity>
                          </View>}
          
                      {currentView === 'view2' && <View style = {styles.view}>
                              <Image source={require('../assets/eat_drink.png')} style={{width: 150, height: 150}}/>
                              <Text style={styles.txt}>Bạn chưa đặt món ăn nào. Hãy đặt beFood</Text>
                              <Text style={styles.txt}>ngay để tận hưởng các ưu đãi từ Be.</Text>
                              
                              <TouchableOpacity style={{backgroundColor: '#FFCC33',top: 15, width: 150, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 12}}>
                                  <Text style={{fontSize: 20, fontWeight: 'bold', bottom: 2}}>Đặt ngay</Text>
                              </TouchableOpacity>
                          </View>}
          
                      {currentView === 'view3' && <View style = {styles.view}>
                              <Image source={require('../assets/airplane.png')} style={{width: 150, height: 150}}/>
                              <Text style={styles.txt}>Bạn chưa đặt vé máy bay nào. Hãy đặt</Text>
                              <Text style={styles.txt}>chiếc vé đầu tiên để tận hưởng các ưu đãi</Text>
                              <Text style={styles.txt}>cực khủng từ Be!</Text>
                              <TouchableOpacity style={{backgroundColor: '#FFCC33',top: 15, width: 150, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 12}}>
                                  <Text style={{fontSize: 20, fontWeight: 'bold', bottom: 2}}>Đặt ngay</Text>
                              </TouchableOpacity>
                          </View>}
          
                      {currentView === 'view4' && <View style = {styles.view}>
                              <Image source={require('../assets/delivery.png')} style={{width: 150, height: 150}}/>
                              <Text style={styles.txt}>Các đơn hàng trên 6 tháng sẽ được ẩn đi.</Text>
                              <Text style={styles.txt}>Bạn vui lòng đặt đơn hàng mới và sử dụng nhiều</Text>
                              <Text style={styles.txt}>ưu đãi từ Be nhé!</Text>
                              <TouchableOpacity style={{backgroundColor: '#FFCC33',top: 15, width: 150, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 12}}>
                                  <Text style={{fontSize: 20, fontWeight: 'bold', bottom: 2}}>Đặt ngay</Text>
                              </TouchableOpacity>
                          </View>}
          
                      {currentView === 'view5' && <View style = {styles.view}>
                              <Image source={require('../assets/be_bus.png')} style={{width: 150, height: 150}}/>
                              <Text style={styles.txt}>Bạn chưa đặt vé xe nào. Hãy đặt chiếc vé</Text>
                              <Text style={styles.txt}>đầu tiên để tận hưởng các ưu đãi cực</Text>
                              <Text style={styles.txt}>khủng từ Be!</Text>
                              <TouchableOpacity style={{backgroundColor: '#FFCC33',top: 15, width: 150, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 12}}
                                  onPress={() => navigation.navigate('Đặt vé xe')}>
                                  <Text style={{fontSize: 20, fontWeight: 'bold', bottom: 2}}>Đặt ngay</Text>
                              </TouchableOpacity>
                          </View>}
          
                      {currentView === 'view6' && <View style = {styles.view}>
                              <Image source={require('../assets/bill_3g.png')} style={{width: 150, height: 150}}/>
                              <Text style={styles.txt}>Bạn chưa có giao dịch điện thoại nào. Nạp</Text>
                              <Text style={styles.txt}>tiền điện thoại ngay để nhận được chiết</Text>
                              <Text style={styles.txt}>khấu từ Be nhé!</Text>
                              <TouchableOpacity style={{backgroundColor: '#FFCC33',top: 15, width: 150, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 12}}
                                  onPress={() => navigation.navigate('Nạp mạng')}>
                                  <Text style={{fontSize: 20, fontWeight: 'bold', bottom: 2}}>Nạp ngay</Text>
                              </TouchableOpacity>
                          </View>}
          
          
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
                btn:{
                  bottom: 10,
                },
                btnView:{
                  // flex:1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#EEEEEE',
                  borderRightWidth:4,
                  borderRightColor: 'white',
                  borderRadius: 15,
                  width: 100,
                  height: 40
                },
                btnView6:{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#EEEEEE',
                  borderRightWidth:4,
                  borderRightColor: 'white',
                  borderRadius: 15,
                  width: 130,
                  height: 40
                },  
                view:{
                  flex:15,
                  height: windowHeight,
                  backgroundColor: 'white',
                  justifyContent:'center',
                  alignItems: 'center'
                },
                txt:{
                  color: '#999999',
                  fontSize: 18,
                },
          
          });
          
          export default HoatDong;
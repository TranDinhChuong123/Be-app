        // <Stack.Navigator>
        //     <Stack.Screen name="Gói Tiết kiệm" options={{headerShown: false}} component={GoiTK} />
        //     <Stack.Screen name="Lịch sử giao dịch" component={LSGiaoDich}/>
        //     <Stack.Screen name="Chi tiết giao dịch" options={{headerShown: false}} component={ChiTietGD}/>
        // </Stack.Navigator>
import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, Dimensions, TouchableHighlight, Pressable } from 'react-native';
import { View, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';

const GoiTK = ({navigation, route}) => {
    const [currentView, setCurrentView] = useState('view1');
    const [goitk, setGoiTK] = useState([
        {id: 1, tenGoi: '15 Chuyến beFood Freeship 15K', img: require('../assets/food.png'), decribe: 'Tiết kiệm đến 216.000 VND (30 ngày)', tick: require('../assets/tick.png'), uuDai: 'Ưu đãi 15k phí giao hàng beFood x15', btn: 'Đăng ký với 9.000đ'},
        {id: 1, tenGoi: '15 Chuyến beFood giảm 25%', img: require('../assets/food.png'), decribe: 'Tiết kiệm đến 711.000 VND (30 ngày)', tick: require('../assets/tick.png'), uuDai: 'Ưu đãi 25% (Tối đa 50K) beFood x15', btn: 'Đăng ký với 39.000đ'},
        {id: 1, tenGoi: '15 Chuyến beBike giảm 25K', img: require('../assets/motor.png'), decribe: 'Tiết kiệm đến 72    1.000 VND (30 ngày)', tick: require('../assets/tick.png'), uuDai: 'Ưu đãi 25% (Tối đa 50K) beFood x15', btn: 'Đăng ký với 29.000đ'   },
    ]);
    const switchToView1 = () => {
        setCurrentView('view1');
      };
    
      const switchToView2 = () => {
        setCurrentView('view2');
      };
    
      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}> 
                {/* <Text style={{fontSize: 20, fontWeight: 'bold', left: 15}}>Gói tiết kiệm</Text> */}
                <TouchableOpacity onPress={() => {navigation.navigate('Lịch sử giao dịch')}} style={{bottom: 45}}> 
                {/* navigate từ tên bên app.js */}
                    <Image style={{width:25, height: 25,left: 345}} source={require('../assets/dongho.png')}/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={{paddingRight: 50}} onPress={switchToView1}>
                    <Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>Danh sách gói</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20, color:'#DDDDDD'}}>|</Text>
                <TouchableOpacity style={{ paddingLeft: 50}} onPress={switchToView2}>
                    <Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>Gói của tôi</Text>
                </TouchableOpacity>
            </View>
            
                {currentView === 'view1' && (
                    <View style={styles.view1}>
                        <ScrollView contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }} style={{top:10}}>
                            <FlatList
                                scrollEnabled = {false}
                                // ItemSeparatorComponent={this.FlatListItemSeparator}
                                data={goitk}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={styles.viewContainer}>
                                        <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.tenGoi}</Text>
                                            <Image style={{width: 50, height: 50}} source={item.img}/>
                                        </View>
                                        <View>
                                            <Text style={{fontSize: 20, color:'#DDDDDD', }}>---------------------------------------</Text>
                                        </View>
                                        <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={{width: 30, height: 30, right: 10}} source={item.tick}/>
                                            <Text style={{fontSize: 17,}}>{item.uuDai}</Text>
                                        </View>
                                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', width: 350}}>
                                            <Pressable style={{flex:1, alignItems: 'center', backgroundColor: '#FFCC33', width: 300, borderRadius: 10}}>
                                                <Text style={{fontSize: 14, fontWeight:'bold', top: 5}}>{item.btn}</Text>
                                            </Pressable>
                                        </View>
                                        <Text style={{fontSize: 20, color:'#DDDDDD', }}>___________________________________________________________</Text>
                                    </View>
                                )}
                            />
                        </ScrollView>
                    </View>  
                )}
            
            
                {currentView === 'view2' && (
                    <View style={styles.view2}>
                        <ScrollView contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }} style={{top:10}}>
                            <View style={styles.viewContainer}>
                                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                                    <View style={{flex:1, flexDirection:'column', left: 10}}>
                                        <Text style={{fontSize: 10, color:'#339900', backgroundColor: '#CCFF99', width: 65, fontWeight: 'bold'}}>ĐÃ SỬ DỤNG</Text>
                                        <Text style={{fontSize: 20, fontWeight:'bold'}}>#beXinChào - Chào bạn mới của Be!</Text>
                                    </View>
                                    <Image style={{width: 75, height: 75, bottom:5, right:2}} source={require('../assets/yellow_gif.png')}/>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, color:'#DDDDDD', }}>------------------------------------------</Text>
                                </View>
                                <View style={{flex:5,}}>
                                    <Text style={{fontSize:12, color:'#BBBBBB', left: 10}}>Tiết kiệm đến 600.000đ (30 ngày)</Text>
                                    <View style={{flex:1, flexDirection: 'column', }}>
                                        <View style={{flex:1, flexDirection:'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                                            <Image style={{width: 25, height: 25, right: 5,  }} source={require('../assets/tick.png')}/>
                                            <Text style={{fontSize: 16, left: 5, right:5 , width: 300}}>#beXinChào - 15% (tối đa 200K) beTravel x1</Text>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                                            <Image style={{width: 25, height: 25,  right: 5 }} source={require('../assets/tick.png')}/>
                                            <Text style={{fontSize: 16, left: 5, right:5, width: 300}}>#beXinChào - 35% (tối đa 50K) beBike x1</Text>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                                            <Image style={{width: 25, height: 25,  right: 5 }} source={require('../assets/tick.png')}/>
                                            <Text style={{fontSize: 16, left: 5, right:5, width: 300}}>#beXinChào - 20% (tối đa 50K) beBike / beCar x3</Text>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                                            <Image style={{width: 25, height: 25,  right: 5 }} source={require('../assets/tick.png')}/>
                                            <Text style={{fontSize: 16, left: 5, right:5, width: 300}}>#beXinChào - Ưu đãi lên đến 50% (tối đa 50K) beCar x1</Text>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                                            <Image style={{width: 25, height: 25,  right: 5 }} source={require('../assets/tick.png')}/>
                                            <Text style={{fontSize: 16, left: 5, right:5, width: 300}}>#beXinChào - 45% (tối đa 50K) beDelivery x1</Text>
                                        </View>
                                        <View style={{flex:1, flexDirection:'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                                            <Image style={{width: 25, height: 25,  right: 5 }} source={require('../assets/tick.png')}/>
                                            <Text style={{fontSize: 16, left: 5, right:5, width: 300}}>#beXinChào - 25% (tối đa 50K) beDelivery x1</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View> 
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
            width: windowWidth,
            backgroundColor: '#fff',
        },
        btnView:{
            flex:1, 
            flexDirection: 'row', 
            justifyContent: 'center',
            alignItems: 'center',
            width: windowWidth,
            backgroundColor: '#fff',
            bottom: 25
        },
        view1:{
            flex: 10,
            // justifyContent: 'center',
            alignItems: 'center',
            width: windowWidth,
            height: windowHeight,
            backgroundColor: '#EEEEEE'
        },
        viewContainer:{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: 350, 
            height: 100,
            paddingTop: 20,
            paddingBottom: 20,
            // top: 10,
            // bottom: 10,
            // paddingLeft: 10,
            // paddingRight: 10,

        },
        view2:{
            flex: 10,
            // justifyContent: 'center',
            alignItems: 'center',
            width: windowWidth,
            height: windowHeight,
            backgroundColor: '#EEEEEE'
        },
    });
    
    export default GoiTK;
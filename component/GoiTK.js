import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { View, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';

const GoiTK = ({navigation}) => {
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
                <Text style={{fontSize: 20, fontWeight: 'bold', left: 10}}>Gói tiết kiệm</Text>
                <Image style={{width:25, height: 25, right: 10}} source={require('../assets/dongho.png')}/>
            </View>
            <View style={styles.btnView}>
                <TouchableHighlight style={{paddingRight: 50}} underlayColor='#FFFF66' onPress={switchToView1}>
                    <Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>Danh sách gói</Text>
                </TouchableHighlight>
                <Text style={{fontSize: 20, color:'#DDDDDD'}}>|</Text>
                <TouchableHighlight style={{ paddingLeft: 50}} underlayColor='#FFFF66' onPress={switchToView2}>
                    <Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>Gói của tôi</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.view1}>
                {currentView === 'view1' && (
                    <ScrollView contentContainerStyle={{padding: 10,backgroundColor: "#EEEEEE", }}>
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
                                        <TouchableOpacity style={{flex:1, alignItems: 'center', backgroundColor: '#FFCC33', width: 300, borderRadius: 10}}>
                                            <Text style={{fontSize: 14, fontWeight:'bold', top: 5}}>{item.btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontSize: 20, color:'#DDDDDD', }}>___________________________________________________________</Text>
                                </View>
                            )}
                        />
                    </ScrollView>
                        
                )}
            </View>
            <View style={styles.view2}>
                {currentView === 'view2' && (
                    <View>
                        {/* View 2 */}
                    </View>
                )}
            </View>      
            
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
            flex:1, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
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
    });
    
    export default GoiTK;
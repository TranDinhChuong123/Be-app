{/* <Stack.Screen name="Chi tiết giao dịch" options={{headerShown: false}} component={ChiTietGD}/> */}
import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, Dimensions, TouchableHighlight, Pressable } from 'react-native';
import { View, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import LSGiaoDich from './LSGiaoDich';

const ChiTietGD = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => {navigation.navigate('Lịch sử giao dịch')}}>
                    <Image style={{width:25, height:25, left: 10}} source={require('../assets/x.png')}/>
                </Pressable>
                <Text style={{fontSize: 20, fontWeight:'bold', left: 20}}>Chi tiết giao dịch</Text>
            </View>
            <View style={styles.info}>
                <Text style={{fontSize: 16}}>#beXinChào - Chào bạn mới của Be!</Text>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>0đ</Text>
            </View>
            <View style={styles.describe}>
                <View style={styles.list}>
                    <Text style={{fontSize: 16, left: 10}}>Thời gian</Text>
                    <Text style={{fontSize: 16, right: 10, fontWeight:'bold'}}>15:06, 04/11/2023</Text>
                </View>
                <View style={styles.list}>
                    <Text style={{fontSize: 16, left: 10}}>Phương thức thanh toán</Text>
                    <Text style={{fontSize: 16, right: 10, fontWeight:'bold'}}>CARD</Text>
                </View>
                <View style={styles.list}>
                    <Text style={{fontSize: 16, left: 10}}>Mã giao dịch</Text>
                    <Text style={{fontSize: 16, right: 10, fontWeight:'bold'}}>#11211858</Text>
                </View>
                <View style={styles.list}>
                    <Text style={{fontSize: 16, left: 10}}>Trạng thái giao dịch</Text>
                    <Text style={{fontSize: 16, right: 10, fontWeight:'bold', color:'#00CC00', backgroundColor: '#99FF99'}}>THÀNH CÔNG</Text>
                </View>
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
        backgroundColor: '#EEEEEE',
        // position: 'relative',
        alignItems: 'center',
    },
    header:{
        flex:1, 
        flexDirection: 'row', 
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        backgroundColor: '#fff',
        height: 50,
    },
    info:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: 370,

    },
    describe:{
        flex: 4,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        width: windowWidth
    },
    list:{
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: 'white',
        width: windowWidth,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
    },
});

export default ChiTietGD;
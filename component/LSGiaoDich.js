{/* <Stack.Screen name="Lịch sử giao dịch" component={LSGiaoDich}/> */}
import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, Dimensions, TouchableHighlight, Pressable } from 'react-native';
import { View, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import GoiTK from './GoiTK';
import ChiTietGD from './chiTietGD';

const LSGiaoDich = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.list} contentContainerStyle={{padding: 10,backgroundColor: "white", }}>
                <TouchableOpacity style={styles.touch} onPress={()=>{navigation.navigate('Chi tiết giao dịch')}}>
                    <View style={styles.name}>
                        <Text style={{fontSize: 18, fontWeight:'bold'}}>#beXinChào - Chào bạn mới của Be!</Text>
                        <Text style={{fontSize: 18, fontWeight:'bold'}}>0đ</Text>
                    </View>
                    <View style={styles.describe}>
                        <Text style={{fontSize: 16, color: '#CCCCCC'}}>15:06, 04/11/2023</Text>
                        <Text style={{fontSize: 16, color:'#00FF00'}}>Thành công</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            
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
            position: 'relative',
    },
    list:{
        flex:4,
        flexDirection: 'column',
    },
    touch:{
        backgroundColor:'white',
        flex: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    name:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',

    },
    describe:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
});

export default LSGiaoDich;
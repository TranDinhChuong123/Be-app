import React, { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';
import LoginScreen from './LoginScreen';

const SingUp = ({navigation,route}) => {
    // const { phoneNumber } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            {/* <View style = {styles.header}>
                <Text>Hoàn tất đăng ký</Text>
            </View> */}
            <View style = {styles.page}>
                <View style={styles.txtinput}>
                    <Text style={{fontSize: 20, fontWeight:'bold', top: 5, left: 10,}}>Be xin chào </Text> 
                    <View style={{flex:1, top: 10, left: 10,}}>
                        <Text style={{fontSize: 14, color:'#888888', position:'absolute', left: 10, top: 5}}>HỌ VÀ TÊN <Text style={{color:'red'}}>*</Text></Text>
                        <TextInput placeholder='VD: Lê Văn A' style={{height: 60, borderWidth:1, borderRadius:12, paddingLeft: 10,width: 350}}/>
                    </View>
                    <View style={{flex:1, top: 5, left: 10,}}>
                        <Text style={{fontSize: 14, color:'#888888', position:'absolute', left: 10, top: 5}}>EMAIL <Text style={{color:'red'}}>*</Text></Text>
                        <TextInput placeholder='VD: levana@gmail.com' style={{height: 60, borderWidth:1, borderRadius:12, paddingLeft: 10,width: 350}}/>
                    </View>
                    
                    <View style={{flex:1, top: 5, left: 10,}}>
                        <Text style={{fontSize: 12, color:'#888888', bottom: 10, left: 10}}>Nhập email để tăng cường bảo mật</Text>
                        <Text style={{fontSize: 14, color:'#888888', position:'absolute', top: 20, left: 10}}>MÃ GIỚI THIỆU</Text>
                        <TextInput placeholder='VD: TQ2EHB' style={{height: 60, borderWidth:1, borderRadius:12, paddingLeft: 10,width: 350}}/>
                        <Text style={{fontSize: 12, color:'#888888',left: 10, top: 5}}>Nếu có mã giới thiệu từ bạn bè, hãy nhập vào đây!</Text>
                    </View>
                   
                    
                </View>
                <View style={{flex:2, top: 20}}>
                    <Text style={{fontSize: 14, color:'#888888',}}>Bằng việc tiếp tục. Bạn đồng ý với <Text style={{fontSize: 14, color:'#0099FF',}}>Quy chế sàn TMDT. Hợp</Text></Text>
                    <Text style={{fontSize: 14, color:'#888888',}}><Text style={{fontSize: 14, color:'#0099FF',}}>đồng vận chuyển </Text>của be và be được xử lý dữ liệu cá nhân </Text>
                    <Text style={{fontSize: 14, color:'#888888',}}>của mình.</Text>
                </View>
                
            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity style = {{backgroundColor: '#FFCC33', width: 370, height: 40, justifyContent:'center', alignItems: 'center', borderRadius: 20}}
                    onPress={()=>{navigation.navigate('TrangChuTap')}}>
                    <Text style={{fontSize: 20, fontWeight:'bold'}}>Xong</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#fff',
        position: 'relative'
    },
    page: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    txtinput:{
        flex:6,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 370,
        borderRadius: 10,
        top: 5
    }
});

export default SingUp;
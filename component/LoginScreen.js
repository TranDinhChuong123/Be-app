import React, { useState } from 'react';
import { View, TextInput, Dimensions, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

const data = [
  { id: 1, name: 'Nguyen Van A', phoneNumber: '0123456789', email: 'nguyenvana@gmail.com' },
  { id: 2, name: 'Tran Thi B', phoneNumber: '0987654321', address: 'tranthib@gmail.com' },
  { id: 3, name: 'Tran Dinh Chuong', phoneNumber: '0945349387', address: 'trandinhchuong@gmail.com' },
];

export default function LoginScreen ({navigation, route}){
  const [phonenumber, setphonenumber] = useState("  ");

  const handleLogin = () => {
    const user = data.find((item) => item.phoneNumber === phonenumber);
    if (user) {
      navigation.navigate('TrangChuTap');
      console.log('trang chu');
    } else {
      navigation.navigate('Hoàn tất đăng ký');
      console.log('dang ky');
    }
  };


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <ImageBackground source={require('../assets/be.png')} style={{width: 100, height: 100}}></ImageBackground>
          <Text style={{fontSize: 30, fontWeight: 'bold' }}>Lên xe cùng Be!</Text>
          <Text>Đăng nhập / Đăng ký tài khoản be ngay bây giờ</Text>
        </View>
    
        <View style={styles.phone}>
            <Image source={require('../assets/phone.jpg')} style={{width:50, height:50,}}></Image>
            <TextInput  placeholderTextColor={'#999999'}
                style={styles.inputtxt}
                placeholder="945349387"
                value={phonenumber}
                onChangeText={(phonenumber) => setphonenumber(phonenumber)}
            />
        </View>
        <View style={styles.btn}>
            <TouchableOpacity style={{width:350, height: 50,backgroundColor: '#FF9900',justifyContent: 'center', alignItems: 'center', borderRadius: 10,  }}
                onPress={handleLogin}>
                <Text style={{fontSize: 20}}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
      
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text style={{fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>------------------Hoặc---------------------</Text>
        </View>
        <View style={styles.outbtn}>
                <TouchableOpacity style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: '#F7F8F9',width:350, height: 30, borderRadius: 10,}}>
                    <Image source={require('../assets/icon_fb.png')} style={{width:20, height:20}}/>
                    <Text>  Đăng nhập bằng Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7F8F9', width:350, height: 30, borderRadius: 10,}}>
                    <Image source={require('../assets/icongoogle.png')} style={{width:20, height:20}}/>
                    <Text>  Đăng nhập bằng Google</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Text style={{color: '#97ADB6',}}>Bằng việc tiếp tục. Bạn đồng ý với 
                <Text style={{color: '#1152FD',}}> Quy chế sàn TMDT</Text>, 
            </Text>
            <Text style={{color: '#97ADB6',}}>
                <Text style={{color: '#1152FD', }}>Hợp đồng vận chuyển</Text> của be và be được xử lý dữ liệu cá nhân của mình
            </Text>
                
        </View>
      
    </View>
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

  phone:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center' ,
    alignItems: 'center'
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  inputtxt:{
    width:300,
    height:50,
    borderWidth:1,
    borderRadius:10,
    paddingLeft:20,
    backgroundColor: '#F7F8F9',
  },    
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  outbtn:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer:{
    flex: 1,
    fontSize: 12
  }
});

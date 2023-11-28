import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Thêm dòng này

import GiaoDoaAn from "./component/GiaoDoAn";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import GiaoDoAn from "./component/GiaoDoAn";
import GiaoDoAnTK from "./component/GiaoDoAnTK";

import GiaoDoAnDH from "./component/GiaoDoAnDH";
import GiaoDoAnYT from "./component/GiaoDoAnYT";
import TrangChu from "./component/TrangChu";
import HoatDongTC from "./component/HoatDongTC";
import TaiKhoanTC from "./component/TaiKhoanTC";
import DoiUuDaiTC from "./component/DoiUuDaiTC";
import KMDaTangGDA from "./component/KMDaTangGDA";
import CTSPKMDT from "./component/CTSPKMDT";
import XemDonHang from "./component/XemDonHang";

import LoginScreen from "./component/LoginScreen";
import NapMang from "./component/napData";
import ManHinhDatVeXe from "./component/BookingBusTicket";
import GoiTK from "./component/GoiTK";
import DailyAttendanceScreen from "./component/CheckinScr";
import ChiTietGD from "./component/chiTietGD";
import LSGiaoDich from "./component/LSGiaoDich";
import HoatDong from "./component/hoatDong";
import SingUp from "./component/singUp";
import GiaoHangGDH from "./component/GiaoHangGDH";
import XeMayGDH from "./component/XeMayGDH";

import { flushSync } from "react-dom";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const GiaoDoAnHeader = () => (
  <View style={{ backgroundColor: "#ffffff" }}>
    <TouchableOpacity onPress={() => navigation.navigate("TrangChuTap")}>
      <Image
        style={styles.image}
        source={require("/imageGiaoDoAn/back.png")}
      ></Image>
    </TouchableOpacity>
    <Text style={{ top: 8, left: 60, fontSize: 18, color: "gray" }}>
      Giao tới
    </Text>
    <Text
      style={{
        // width: 50,
        height: 20,
        top: 8,
        left: 60,
        fontSize: 18,
        fontWeight: "500",
      }}
    >
      30 Nguyên Hồng ,phườn...
    </Text>

    <TextInput
      style={{
        position: "absolute",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        top: 63,
        width: 330,
        left: 25,
        paddingLeft: 10,
      }}
      placeholder="Tìm món ăn hoặc nhà hàng"
    ></TextInput>
    <TouchableOpacity>
      <Image
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          left: 295,
          top: -10,
        }}
        source={require("/imageGiaoDoAn/pencil.png")}
      ></Image>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image
        style={{
          position: "absolute",
          width: 37,
          height: 37,
          left: 330,
          top: -40,
        }}
        source={require("/imageGiaoDoAn/anh1.jpg")}
      ></Image>
    </TouchableOpacity>
  </View>
);

const GiaoDoAnTKHeader = () => (
  <View style={{ backgroundColor: "#ffffff" }}>
    <TextInput
      style={{
        position: "absolute",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        top: 15,
        width: 310,
        left: 22,
        paddingLeft: 40,
        backgroundColor: "#f1f5f8",
      }}
      placeholder="Tìm món ăn hoặc nhà hàng"
      // placeholderTextColor={"gray"}
    ></TextInput>
    <Image
      style={{
        position: "absolute",
        width: 23,
        height: 23,
        top: 23,
        left: 29,
      }}
      source={require("/imageGiaoDoAn/search.jpg")}
    ></Image>
    <TouchableOpacity>
      <Text
        style={{ position: "absolute", left: 340, top: 25, fontWeight: "700" }}
      >
        Hủy
      </Text>
    </TouchableOpacity>
  </View>
);
const GiaoDoAnTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        header: GiaoDoAnHeader,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/iconTC.jpg")
                : require("./imageGiaoDoAn/iconTC1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Trang chủ</Text>
        ),
      }}
      name="GiaoDoAn"
      component={GiaoDoAn}
    />
    <Tab.Screen
      options={{
        header: GiaoDoAnTKHeader,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/iconTK .jpg")
                : require("./imageGiaoDoAn/iconTK1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Tìm kiếm</Text>
        ),
      }}
      name="GiaoDoAnTK"
      component={GiaoDoAnTK}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerTitle: "Đơn hàng",
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/iconDH.jpg")
                : require("./imageGiaoDoAn/iconDH1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Đơn hàng</Text>
        ),
      }}
      name="GiaoDoAnDH"
      component={GiaoDoAnDH}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerTitle: "Nhà hàng yêu thích",
        headerRight: () => (
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 22, right: 15 }}
                source={require("./imageGiaoDoAn/nhahangyt.jpg")}
              ></Image>
            </TouchableOpacity>
          </View>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/iconYT.jpg")
                : require("./imageGiaoDoAn/iconYT1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Yêu thích</Text>
        ),
      }}
      name="GiaoDoAnYT"
      component={GiaoDoAnYT}
    />
  </Tab.Navigator>
);
const TrangChuTap = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerShown: false,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/be1.jpg")
                : require("./imageGiaoDoAn/be.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Trang chủ</Text>
        ),
      }}
      name="TrangChu"
      component={TrangChu}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnTKHeader,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/hd1.jpg")
                : require("./imageGiaoDoAn/hd.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Hoạt động</Text>
        ),
      }}
      name="HoatDongTC"
      component={HoatDongTC}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        // header: GiaoDoAnHeader,
        headerTitle: "Đổi ưu đãi",
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/dud1.jpg")
                : require("./imageGiaoDoAn/dud.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Đổi ưu đãi</Text>
        ),
      }}
      name="DoiUuDaiTC"
      component={DoiUuDaiTC}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        // headerTitle: "Nhà hàng yêu thích",
        headerRight: () => (
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 22, right: 15 }}
                source={require("./imageGiaoDoAn/nhahangyt.jpg")}
              ></Image>
            </TouchableOpacity>
          </View>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./imageGiaoDoAn/tk1.jpg")
                : require("./imageGiaoDoAn/tk.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Tài khoản</Text>
        ),
      }}
      name="GiaoDoAnYT"
      component={TaiKhoanTC}
    />
  </Tab.Navigator>
);

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="TrangChuTap"
          component={CTSPKMDT}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="TrangChuTap"
          component={TrangChuTap}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GiaoDoAnTab"
          component={GiaoDoAnTab}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="KMDaTangGDA"
          component={KMDaTangGDA}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CTSPKMDT"
          component={CTSPKMDT}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="XemDonHang"
          component={XemDonHang}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="TaiKhoanTC"
          component={TaiKhoanTC}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GiaoHangGDH"
          component={GiaoHangGDH}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="XeMayGDH"
          component={XeMayGDH}
        />

        <Stack.Screen name="Hoàn tất đăng ký" component={SingUp} />

        <Stack.Screen
          name="Gói Tiết kiệm"
          options={{ headerShown: false }}
          component={GoiTK}
        />
        <Stack.Screen name="Lịch sử giao dịch" component={LSGiaoDich} />
        <Stack.Screen
          name="Chi tiết giao dịch"
          options={{ headerShown: false }}
          component={ChiTietGD}
        />

        <Stack.Screen
          name="Nạp tiền điện thoại"
          options={{ headerShown: false }}
          component={NapMang}
        />
        <Stack.Screen name="Hoạt động" component={HoatDong} />

        <Stack.Screen
          name="Mua vé xe khách"
          options={{ headerShown: false }}
          component={ManHinhDatVeXe}
        />

        <Stack.Screen name="Thử thách" component={DailyAttendanceScreen} />

        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="screen2"
          component={screen2}
        />
   
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 23,
    height: 23,
    top: 10,
    left: 25,
  },
  input: {
    position: "absolute",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    top: 63,
    width: 330,
    left: 25,
    paddingLeft: 10,
  },
});

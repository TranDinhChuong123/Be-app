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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const GiaoDoAnHeader = () => (
  <View style={{ backgroundColor: "#ffffff" }}>
    <Image
      style={styles.image}
      source={require("/imageGiaoDoAn/back.png")}
    ></Image>
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
      style={styles.input}
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
        header: GiaoDoAnHeader,
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
        header: GiaoDoAnHeader,
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
        header: GiaoDoAnHeader,
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="GiaoDoAnTab"
          component={GiaoDoAnTab}
        />

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

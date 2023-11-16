import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GiaoDoAnDH({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 10,
          top: 0,
          backgroundColor: "#f2f3f5",
          // backgroundColor: "black",
        }}
      ></View>

      <Image
        style={{ position: "absolute", width: 100, height: 100, top: 180 }}
        source={require("../imageGiaoDoAn/imageDH.jpg")}
      ></Image>

      <Text
        style={{
          position: "absolute",
          fontSize: 15,
          fontWeight: "400",
          color: "#858e96",
          width: 300,
          textAlign: "center",
          top: 290,
        }}
      >
        Bạn chưa đặt món ăn nào. Hãy đặt beFood ngay để tận hưởng các ưu đãi từ
        Be.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("GiaoDoAn")}
        style={{
          top: 350,
          position: "absolute",
          width: 150,
          height: 35,
          backgroundColor: "#ffcc00",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "700", textAlign: "center" }}>Đặt ngay</Text>
      </TouchableOpacity>
=======
import { StyleSheet, Text, View } from "react-native";

export default function GiaoDoAnDH() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

>>>>>>> 492e18e470b7e86966d7048290c1870c697f36f7
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

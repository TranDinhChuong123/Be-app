import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function GiaoDoAnYT({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", width: 200, height: 200, top: 110 }}
        source={require("../imageGiaoDoAn/imageYT.jpg")}
      ></Image>

      <Text
        style={{
          position: "absolute",
          fontSize: 15,
          fontWeight: "400",
          // color: "#858e96",
          width: 300,
          textAlign: "center",
          top: 320,
        }}
      >
        Nhấn vào biểu tượng trái tim trong nhà hàng để lưu quán bạn yêu thích.
        Danh sách quán bạn đã lưu sẽ hiển thị tại đây.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("GiaoDoAn")}
        style={{
          top: 400,
          position: "absolute",
          width: 150,
          height: 35,
          backgroundColor: "#ffcc00",
          alignContent: "center",
          justifyContent: "center",
          // borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "700", textAlign: "center" }}>
          Khám phá ngay
        </Text>
      </TouchableOpacity>
=======
import { StyleSheet, Text, View } from "react-native";

export default function GiaoDoAnYT() {
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
<<<<<<< HEAD
    backgroundColor: "#f1f5f8",
=======
    backgroundColor: "#fff",
>>>>>>> 492e18e470b7e86966d7048290c1870c697f36f7
    alignItems: "center",
    justifyContent: "center",
  },
});

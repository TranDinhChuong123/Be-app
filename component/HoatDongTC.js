import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

const data = [
  { Text: "ĐẶT XE" },
  { Text: "ĂN UỐNG" },
  { Text: "GIAO HÀNG" },
  { Text: "VÉ MÁY BAY" },
  { Text: "VÉ XE KHÁCH" },
  { Text: "NẠP ĐIỆN THOẠT" },
];

export default function HoatDongTC({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          position: "absolute",
          top: 10,
          left: 15,
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        Hoạt động
      </Text>
      <FlatList
        style={{ position: "absolute", top: 70, left: 20, width: "100%" }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: 100,
              height: 30,
              backgroundColor: item.Text === "ĐẶT XE" ? "black" : "transparent",

              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: item.Text === "ĐẶT XE" ? "#fff" : "gray" }}>
              {item.Text}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>

      <Image
        style={{
          position: "absolute",
          top: 200,
          width: 200,
          height: 300,
          resizeMode: "center",
        }}
        source={require("../imageGiaoDoAn/xedatthd.jpg")}
      ></Image>

      <Text
        style={{
          position: "absolute",
          top: 470,
          width: "80%",
          resizeMode: "center",
          fontSize: 18,
          color: "gray",
          textAlign: "center",
        }}
      >
        Bạn chưa đặt chuyến xe nào Đặt chuyến xe đầu tiên ngay và sử dụng nhiều
        ưu đãi từ Be!
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("XeMayGDH")}
        style={{
          top: 560,
          position: "absolute",
          width: 160,
          height: 35,
          backgroundColor: "#ffc50c",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 18 }}>
          Đặt ngay
        </Text>
      </TouchableOpacity>
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

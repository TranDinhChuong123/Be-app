import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";

export default function XeMayGDH({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TrangChuTap")}
        style={{
          position: "absolute",
          top: 10,
          left: 20,
          width: 200,
          height: 30,
        }}
      >
        <Image
          style={{ width: 20, height: 20, resizeMode: "center" }}
          source={require("../imageGiaoDoAn/backxemay.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: -5,
            left: 30,
            fontWeight: "500",
            fontSize: 19,
          }}
        >
          Điểm đến
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ position: "absolute", color: "blue", top: 5, right: 20 }}
      >
        <Text style={{ color: "blue", fontSize: 17 }}>Chọn từ bản đồ</Text>
      </TouchableOpacity>

      <TextInput
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          width: "85%",
          height: 30,
          fontWeight: "500",
        }}
        value="Giày cưới KIYOKO, Nguyên Hồng,Phường 1,Gò Vấp"
      ></TextInput>
      <Image
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          resizeMode: "center",
          top: 50,
          left: 10,
        }}
        source={require("../imageGiaoDoAn/muatay22.jpg")}
      ></Image>

      <Image
        style={{
          position: "absolute",
          width: 25,
          height: 25,
          resizeMode: "center",
          top: 110,
          left: 10,
        }}
        source={require("../imageGiaoDoAn/adrrxm.jpg")}
      ></Image>

      <View
        style={{
          position: "absolute",
          top: 95, // Thay đổi vị trí theo yêu cầu của bạn
          right: 0,
          width: "85%",
          height: 1, // Chiều dày của đường gạch ngang
          backgroundColor: "#eeeeee", // Màu của đường gạch ngang
        }}
      />

      <TextInput
        style={{
          position: "absolute",
          top: 110,
          left: 50,
          width: "75%",
          height: 30,
        }}
        placeholder="Nhập điểm đến"
        placeholderTextColor={"gray"}
      ></TextInput>

      <TouchableOpacity
        style={{
          position: "absolute",

          top: 110,
          right: 10,
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/addadrrxm.jpg")}
        ></Image>
      </TouchableOpacity>

      <Image
        style={{
          position: "absolute",
          width: 15,
          height: 18,
          resizeMode: "center",
          top: 160,
          left: 30,
        }}
        source={require("../imageGiaoDoAn/diadiemdaluu.jpg")}
      ></Image>
      <Text
        style={{
          position: "absolute",

          top: 163,
          left: 60,
          fontWeight: "700",
          fontSize: 12,
        }}
      >
        ĐỊA ĐIỂM ĐÃ LƯU
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",

          top: 203,
          left: 20,
          justifyContent: "center",
          width: 140,
          borderRadius: 15,
          height: 30,
          backgroundColor: "#eeeeee",
        }}
      >
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            resizeMode: "center",
            left: 20,
          }}
          source={require("../imageGiaoDoAn/addxm.jpg")}
        ></Image>
        <Text style={{ left: 50 }}>Thêm nhà</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",

          top: 203,
          left: 170,
          justifyContent: "center",
          width: 160,
          borderRadius: 15,
          height: 30,
          backgroundColor: "#eeeeee",
        }}
      >
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            resizeMode: "center",
            left: 20,
          }}
          source={require("../imageGiaoDoAn/addxm.jpg")}
        ></Image>
        <Text style={{ left: 50 }}>Thêm công ty</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",

          top: 203,
          left: 340,
          justifyContent: "center",
          width: 160,
          borderRadius: 15,
          height: 30,
          backgroundColor: "#eeeeee",
        }}
      >
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            resizeMode: "center",
            left: 20,
          }}
          source={require("../imageGiaoDoAn/addxm.jpg")}
        ></Image>
        <Text style={{ left: 50 }}>Thêm địa chỉ</Text>
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

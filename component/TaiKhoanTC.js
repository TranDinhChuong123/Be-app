import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
var data = [
  { image: require("../imageGiaoDoAn/khuyenmai.jpg"), text: "Khuyến mãi" },
  { image: require("../imageGiaoDoAn/goitietkiem.jpg"), text: "Gió tiết kiệm" },
  {
    image: require("../imageGiaoDoAn/gioithieuvauudai.jpg"),
    text: "Giới thiệu & nhận ưu đãi",
  },
  { image: require("../imageGiaoDoAn/thanhtoan.jpg"), text: "Thanh toán" },
  {
    image: require("../imageGiaoDoAn/trothanhtaixebe.jpg"),
    text: "Trở thành tài xế be",
  },
];
var data1 = [
  { image: require("../imageGiaoDoAn/khuyenmai.jpg"), text: "Hộp thư" },
  {
    image: require("../imageGiaoDoAn/hotro.jpg"),
    text: "Hỗ trợ",
    image1: require("../imageGiaoDoAn/next.jpg"),
  },
  {
    image: require("../imageGiaoDoAn/caidat.jpg"),
    text: "Cài đặt",
    image1: require("../imageGiaoDoAn/next.jpg"),
  },
];

export default function TaiKhoanTC({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            width: "100%",
            height: 228,
            backgroundColor: "#d5bcb5",
            alignItems: "center",
            top: 0,
          }}
        >
          <Image
            style={{ width: 100, height: 100, top: 10, marginBottom: 20 }}
            source={require("../imageGiaoDoAn/icontk.jpg")}
          ></Image>
          <Text
            style={{
              position: "relative",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Trần Đình Chương
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 25,
              height: 25,
              top: 150,
              left: 120,
            }}
            source={require("../imageGiaoDoAn/star.png")}
          ></Image>
          <Text
            style={{
              position: "absolute",

              top: 151,
              left: 149,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            5
          </Text>
          <Text
            style={{
              position: "absolute",

              top: 151,
              left: 169,
              fontSize: 18,
            }}
          >
            +84389094153
          </Text>

          <Image
            style={{ position: "absolute", width: 25, height: 25, bottom: 20 }}
            source={require("../imageGiaoDoAn/icontkvuong.jpg")}
          ></Image>
        </TouchableOpacity>

        <View style={styles.container1}>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 10,
                resizeMode: "center",
              }}
              source={require("../imageGiaoDoAn/lienkettk.jpg")}
            ></Image>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 200,
                resizeMode: "center",
              }}
              source={require("../imageGiaoDoAn/moi.jpg")}
            ></Image>

            <Text style={{ left: 50 }}>Liên kết tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 10,
                resizeMode: "center",
              }}
              source={require("../imageGiaoDoAn/caidatchuyendi.jpg")}
            ></Image>
            <Image
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                left: 350,
                resizeMode: "center",
              }}
              source={require("../imageGiaoDoAn/next.jpg")}
            ></Image>

            <Text style={{ left: 50 }}>Cài đặt chuyến đi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 10,
                resizeMode: "center",
              }}
              source={require("../imageGiaoDoAn/baohiem.jpg")}
            ></Image>

            <Text style={{ left: 50 }}>Bảo hiểm OPES</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          style={{
            // position: "absolute",
            top: 420,
            width: "100%",
            height: 50,
            backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              width: 25,
              height: 25,
              left: 10,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/baohiem.jpg")}
          ></Image>

          <Text style={{ left: 50 }}>LKhuyến mãi</Text>
        </TouchableOpacity> */}

        <FlatList
          style={{ position: "absolute", top: 420, height: 300, width: "100%" }}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                // position: "absolute",

                width: "100%",
                height: 50,
                backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
                marginBottom: 3,
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  left: 10,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>

              <Text style={{ left: 50 }}>{item.text}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>

        <FlatList
          style={{ position: "absolute", top: 700, height: 200, width: "100%" }}
          data={data1}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                // position: "absolute",

                width: "100%",
                height: 50,
                backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
                marginBottom: 3,
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  left: 10,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>

              <Image
                style={{
                  position: "absolute",
                  width: 15,
                  height: 15,
                  left: 350,
                  resizeMode: "center",
                }}
                source={item.image1}
              ></Image>

              <Text style={{ left: 50 }}>{item.text}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>
        <Text
          style={{ position: "absolute", top: 880, color: "gray", left: 20 }}
        >
          Phiên bản 2.6.50
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f7",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // position: "absolute",
    top: 100,
    width: "100%",
    height: 50,
    backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
    marginBottom: 10,
    justifyContent: "center",
  },
  container1: {
    position: "absolute",
    top: 140,
    flexDirection: "column", // Dòng chứa các View sẽ theo chiều ngang
    justifyContent: "space-between", // Các View sẽ nằm cách đều nhau
    width: "100%",
  },
});

{
  /* <Stack.Screen name="Đặt vé xe" options={{headerShown: false}} component={ManHinhDatVeXe}/>
            <Stack.Screen name="Hoạt động" component={HoatDong}/>
            <Stack.Screen name="Nạp Mạng" options={{headerShown: false}} component={NapMang}/> */
}
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Modal,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import HoatDong from "./hoatDong";

const ManHinhDatVeXe = ({ navigation }) => {
  const [diemDen, setDiemDen] = useState("");
  const [diemXuatPhat, setDiemXuatPhat] = useState("");
  const [danhSachDiaDiem, setDanhSachDiaDiem] = useState([
    { id: "1", tenDiaDiem: "Hồ Chí Minh", anh: require("../assets/map.png") },
    { id: "2", tenDiaDiem: "Hà Nội", anh: require("../assets/map.png") },
    {
      id: "3",
      tenDiaDiem: "Vũng Tàu, Bà Rịa - Vũng Tàu",
      anh: require("../assets/map.png"),
    },
    { id: "4", tenDiaDiem: "Đà Lạt", anh: require("../assets/map.png") },
    { id: "5", tenDiaDiem: "Sa Pa", anh: require("../assets/map.png") },
    { id: "6", tenDiaDiem: "Đà Nẵng", anh: require("../assets/map.png") },
    { id: "7", tenDiaDiem: "Hải Phòng", anh: require("../assets/map.png") },
    { id: "8", tenDiaDiem: "Ninh Bình", anh: require("../assets/map.png") },
    { id: "9", tenDiaDiem: "Quảng Nam", anh: require("../assets/map.png") },
  ]);

  const chonDiaDiem = (diaDiem) => {
    if (diemXuatPhat === "") {
      setDiemXuatPhat(diaDiem.tenDiaDiem);
    } else if (diemDen === "") {
      setDiemDen(diaDiem.tenDiaDiem);
    } else {
      setDiemXuatPhat(diaDiem.tenDiaDiem);
      setDiemDen("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TrangChuTap");
            }}
          >
            <Image
              source={require("../assets/back.png")}
              style={{ width: 30, height: 30, resizeMode: "center" }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold", left: 5 }}>
            Mua vé xe khách
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Hoạt động");
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#3399FF",
                fontWeight: "bold",
                right: 15,
              }}
            >
              Vé của tôi
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inputtxt}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 20, height: 20, position: "absolute", right: 328 }}
            source={require("../assets/vaytay.png")}
          />
          <TextInput
            style={{
              width: 350,
              height: 50,
              paddingLeft: 25,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Tìm điểm đi"
            value={diemXuatPhat}
            onChangeText={(text) => setDiemXuatPhat(text)}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 20, height: 20, position: "absolute", right: 328 }}
            source={require("../assets/yellow_map.png")}
          />
          <TextInput
            style={{
              width: 350,
              height: 50,
              paddingLeft: 25,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Tìm điểm đến"
            value={diemDen}
            onChangeText={(text) => setDiemDen(text)}
          />
        </View>
      </View>
      <View style={styles.conten}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#BBBBBB",
            right: 40,
          }}
        >
          Địa điểm phổ biến
        </Text>
        <Image
          style={{ width: 30, height: 30, left: 30, top: 5 }}
          source={require("../assets/len.png")}
        />
      </View>
      <View style={styles.diadiem}>
        <ScrollView
          contentContainerStyle={{ padding: 10, backgroundColor: "#EEEEEE" }}
        >
          <FlatList
            // showsVerticalScrollIndicator={false}
            data={danhSachDiaDiem}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  style={{ width: 50, height: 50, position: "absolute" }}
                  source={item.anh}
                />
                <TouchableOpacity
                  style={{
                    width: 400,
                    height: 50,
                    backgroundColor: "white",
                    justifyContent: "center",
                    paddingLeft: 10,
                    left: 50,
                  }}
                  onPress={() => chonDiaDiem(item)}
                >
                  <Text
                    style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                  >
                    {item.tenDiaDiem}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnfooter}
          title="Đặt vé"
          butom
          onPress={() => console.log("Đặt vé")}
          disabled={!diemDen || !diemXuatPhat}
        >
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            Đặt vé
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputtxt: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
  },
  conten: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
  },
  diaDiem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
  },
  btnfooter: {
    width: 250,
    height: 35,
    backgroundColor: "#FFFF33",
    paddingLeft: 95,
    paddingTop: 5,
  },
});

export default ManHinhDatVeXe;

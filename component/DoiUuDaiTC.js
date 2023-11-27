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
  { image: require("../imageGiaoDoAn/uudaibe.jpg"), text: "Ưu đãi be" },
  { image: require("../imageGiaoDoAn/muasamdud.jpg"), text: "Mua sắm" },
  { image: require("../imageGiaoDoAn/amthucdud.jpg"), text: "Ẩm thực" },
  { image: require("../imageGiaoDoAn/dichvudud.jpg"), text: "Dịch vụ" },
  { image: require("../imageGiaoDoAn/hoctapdud.jpg"), text: "Học tập" },
];
const data1 = [
  { image: require("../imageGiaoDoAn/pisen1.jpg") },
  { image: require("../imageGiaoDoAn/pisen2.jpg") },
  { image: require("../imageGiaoDoAn/pisen3.jpg") },
];

const data2 = [
  {
    image: require("../imageGiaoDoAn/300k.jpg"),
    text1: "Giảm 300k cho đơn từu 3 triệu",
    image2: require("../imageGiaoDoAn/bediem.jpg"),
    text2: "1.000",
    text3: "1.500",
    text4: "Đổi ngay",
  },
  {
    image: require("../imageGiaoDoAn/300k.jpg"),
    text1: "Giảm 6% mọi đơn hàng",
    image2: require("../imageGiaoDoAn/bediem.jpg"),
    text2: "1.000",
    text3: "1.500",
    text4: "Đổi ngay",
  },
];

const data3 = [
  {
    image: require("../imageGiaoDoAn/230k.jpg"),
    text1: "Combo quà 230k lần đầu thanh toán hóa đơn trên MoMo",
    image2: require("../imageGiaoDoAn/bediem.jpg"),
    text2: "300",
    text3: "500",
    text4: "Đổi ngay",
  },
  {
    image: require("../imageGiaoDoAn/laubotaytang.jpg"),
    text1: "Giảm 6% mọi đơn hàng",
    image2: require("../imageGiaoDoAn/bediem.jpg"),
    text2: "1.000",
    text3: "1.500",
    text4: "Đổi ngay",
  },
];

const data4 = [
  {
    image: require("../imageGiaoDoAn/10kbe.jpg"),
    text1: "Ưu đãi 10k beBike",
    image2: require("../imageGiaoDoAn/bediem.jpg"),
    text2: "10.000",
    text3: "",
    text4: "Đổi ngay",
  },
  {
    image: require("../imageGiaoDoAn/10kbe1.jpg"),
    text1: "Ưu đãi 10k beDelivery",
    image2: require("../imageGiaoDoAn/bediem.jpg"),
    text2: "10.000",
    text3: "",
    text4: "Đổi ngay",
  },
];
export default function DoiUuDaiTC({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#dac3bd",
          top: 0,
          width: "100%",
          height: 100,
        }}
      >
        <Text style={{ top: 20, left: 20, fontWeight: "700", fontSize: 19 }}>
          Ưu đãi thành viên
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            top: -5,
            width: 100,
            height: 30,
            left: 270,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#457dda", fontWeight: "bold" }}>
            Ưu đãi của tôi
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          position: "absolute",
          width: "95%",
          height: 150,
          borderColor: "gray",
          borderWidth: 1,
          top: 70,
          backgroundColor: "#fff",
          borderRadius: 7,
        }}
      >
        <Image
          style={{
            width: 150,
            height: 30,
            resizeMode: "center",
            top: 10,
            left: 20,
          }}
          source={require("../imageGiaoDoAn/lienketly.jpg")}
        ></Image>
        <TouchableOpacity
          style={{ position: "absolute", width: 100, height: 30, left: 270 }}
        >
          <Image
            style={{
              position: "absolute",
              width: 25,
              height: 25,
              resizeMode: "center",
              top: 10,
              right: 35,
            }}
            source={require("../imageGiaoDoAn/bediem.jpg")}
          ></Image>
          <Text
            style={{
              position: "absolute",
              fontWeight: "bold",
              top: 13,
              right: 25,
            }}
          >
            0
          </Text>
        </TouchableOpacity>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ position: "absolute", top: 50, width: "98%" }}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                left: 10,
                alignItems: "center",

                width: 85,
                height: 100,
              }}
              onPress={() => {
                if (item.text == "Giao đồ ăn") {
                  navigation.navigate("GiaoDoAnTab");

                  console.log("Đã nhấn vào laptrinh");
                } else {
                  // Thực hiện hành động khác khi item.text không phải "laptrinh"
                  console.log("Đã nhấn vào một giá trị khác");
                }
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  width: 50,
                  height: 50,
                  marginBottom: 15,
                }}
                source={item.image}
              ></Image>
              <View style={{ alignContent: "center" }}>
                <Text style={{ fontWeight: "500" }}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <ScrollView
        style={{
          position: "absolute",
          width: "100%",
          height: "75%",
          top: 220,
          // borderColor: "black",
          // borderWidth: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={{
            position: "absolute",
            width: "95%",
            height: 150,
            resizeMode: "center",
            top: 0,
            alignSelf: "center",
          }}
          source={require("../imageGiaoDoAn/daitiecuudai.jpg")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: 140,
            left: 20,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Miễn phí bePoint từ LynkiD
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 142,
            right: 30,
          }}
        >
          <Text style={{ color: "blue" }}>Xem tất cả</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              resizeMode: "center",
              right: -25,
              alignSelf: "center",
            }}
            source={require("../imageGiaoDoAn/xemtatca.jpg")}
          ></Image>
        </TouchableOpacity>

        <FlatList
          style={{ position: "absolute", top: 146 }}
          horizontal
          data={data1}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 10 }}>
              <Image
                style={{
                  width: 300,
                  height: 400,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>
            </TouchableOpacity>
          )}
        ></FlatList>
        <Image
          style={{
            position: "absolute",
            top: 320,
            left: 20,
            width: 30,
            height: 500,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/100.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: 555,
            left: 60,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          ĐẠI TIỆC ƯU ĐÃI BLACK...
        </Text>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 558,
            right: 30,
          }}
        >
          <Text style={{ color: "blue" }}>Xem tất cả</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              resizeMode: "center",
              right: -25,
              alignSelf: "center",
            }}
            source={require("../imageGiaoDoAn/xemtatca.jpg")}
          ></Image>
        </TouchableOpacity>

        <FlatList
          data={data2}
          horizontal
          style={{ position: "absolute", top: 600 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: 280,
                height: 290,
                marginLeft: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  // top: 0,
                  top: -25,
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  fontSize: 18,
                  top: 170,
                  left: 20,
                }}
              >
                {item.text1}
              </Text>
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  resizeMode: "center",
                  top: 225,
                  left: 20,
                }}
                source={require("../imageGiaoDoAn/bediem.jpg")}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 47,
                  fontSize: 16,
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 87,
                  fontSize: 16,
                  color: "gray",
                  textDecorationLine: "line-through",
                }}
              >
                {item.text3}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 255,
                  left: 20,
                  fontSize: 20,
                  color: "blue",
                }}
              >
                {item.text4}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>

        <FlatList
          data={data2}
          horizontal
          style={{ position: "absolute", top: 600 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: 280,
                height: 290,
                marginLeft: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  // top: 0,
                  top: -25,
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  fontSize: 18,
                  top: 170,
                  left: 20,
                }}
              >
                {item.text1}
              </Text>
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  resizeMode: "center",
                  top: 225,
                  left: 20,
                }}
                source={require("../imageGiaoDoAn/bediem.jpg")}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 50,
                  fontSize: 16,
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 92,
                  fontSize: 16,
                  color: "gray",
                  textDecorationLine: "line-through",
                }}
              >
                {item.text3}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 255,
                  left: 20,
                  fontSize: 20,
                  color: "blue",
                }}
              >
                {item.text4}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>

        <Image
          style={{
            position: "absolute",
            top: 690,
            left: 20,
            width: 30,
            height: 500,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/moilenke.jpg")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: 925,
            left: 60,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Mới lên kệ
        </Text>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 928,
            right: 30,
          }}
        >
          <Text style={{ color: "blue" }}>Xem tất cả</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              resizeMode: "center",
              right: -25,
              alignSelf: "center",
            }}
            source={require("../imageGiaoDoAn/xemtatca.jpg")}
          ></Image>
        </TouchableOpacity>

        <FlatList
          data={data3}
          horizontal
          style={{ position: "absolute", top: 970 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: 280,
                height: 290,
                marginLeft: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  // top: 0,
                  top: -25,
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  fontSize: 18,
                  top: 170,
                  left: 20,
                }}
              >
                {item.text1}
              </Text>
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  resizeMode: "center",
                  top: 225,
                  left: 20,
                }}
                source={require("../imageGiaoDoAn/bediem.jpg")}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 50,
                  fontSize: 16,
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 92,
                  fontSize: 16,
                  color: "gray",
                  textDecorationLine: "line-through",
                }}
              >
                {item.text3}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 255,
                  left: 20,
                  fontSize: 20,
                  color: "blue",
                }}
              >
                {item.text4}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>

        <Image
          style={{
            position: "absolute",
            top: 1050,
            left: 20,
            width: 30,
            height: 500,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/100.jpg")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: 1285,
            left: 60,
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          Hot nhất tháng!
        </Text>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 1292,
            right: 30,
          }}
        >
          <Text style={{ color: "blue" }}>Xem tất cả</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              resizeMode: "center",
              right: -25,
              alignSelf: "center",
            }}
            source={require("../imageGiaoDoAn/xemtatca.jpg")}
          ></Image>
        </TouchableOpacity>

        <FlatList
          data={data4}
          horizontal
          style={{ position: "absolute", top: 1340 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: 280,
                height: 290,
                marginLeft: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  // top: 0,
                  top: -25,
                  width: "100%",
                  height: 200,
                  borderRadius: 5,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  fontSize: 18,
                  top: 170,
                  left: 20,
                }}
              >
                {item.text1}
              </Text>
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  resizeMode: "center",
                  top: 225,
                  left: 20,
                }}
                source={require("../imageGiaoDoAn/bediem.jpg")}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 50,
                  fontSize: 16,
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 225,
                  left: 92,
                  fontSize: 16,
                  color: "gray",
                  textDecorationLine: "line-through",
                }}
              >
                {item.text3}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  top: 255,
                  left: 20,
                  fontSize: 20,
                  color: "blue",
                }}
              >
                {item.text4}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f8",
    alignItems: "center",
    justifyContent: "center",
  },
});

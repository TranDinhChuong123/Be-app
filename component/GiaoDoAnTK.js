import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const data = [
  { imge: require("../imageGiaoDoAn/Caphe.jpg"), text: "Cà Phê/Trà" },
  { imge: require("../imageGiaoDoAn/sinhto.jpg"), text: "Sinh tố/Nước ép/Sữa" },
  { imge: require("../imageGiaoDoAn/banhmy.jpg"), text: "Bánh Mì/Xôi" },
  { imge: require("../imageGiaoDoAn/monchay.jpg"), text: "Món Chay" },
  { imge: require("../imageGiaoDoAn/bun.jpg"), text: "Bún/Phở/Mỳ/Cháo" },
  { imge: require("../imageGiaoDoAn/haisan.jpg"), text: "Ốc/Cá/Hải Sản" },
  { imge: require("../imageGiaoDoAn/anvat.jpg"), text: "Ăn Vặt" },
  { imge: require("../imageGiaoDoAn/trangmieng.jpg"), text: "Tráng Miệng" },
];
const data1 = [
  { imge: require("../imageGiaoDoAn/trasua.jpg"), text: "Trà Sữa" },
  {
    imge: require("../imageGiaoDoAn/mondinhduong.jpg"),
    text: "Món Ding Dưỡng",
  },
  { imge: require("../imageGiaoDoAn/thucannhanh.jpg"), text: "Thức ăn nhanh" },
  { imge: require("../imageGiaoDoAn/com.jpg"), text: "Cơm/Cơm tấm" },
  { imge: require("../imageGiaoDoAn/pizza.jpg"), text: "Pizza" },
  { imge: require("../imageGiaoDoAn/lau.jpg"), text: "Lẩu & Nướng" },
  {
    imge: require("../imageGiaoDoAn/amthucquocte.jpg"),
    text: "Ẩm thực quốc tế",
  },
  {
    imge: require("../imageGiaoDoAn/trangmieng.jpg"),
    text: "Món ăn truyền thống",
  },
];

export default function GiaoDoAnTK() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <Image
          style={{
            // position: "absolute",
            width: "90%",
            height: 150,
            top: 50,
            alignSelf: "center",
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/monngoncuoituan.jpg")}
        ></Image>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 205,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 250,
            fontWeight: "700",
            left: 20,
          }}
        >
          ĐỀ XUẤT CHO BẠN
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 290,
            left: 20,
            backgroundColor: "#ffefdc",
            width: 155,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>bún đậu mắm tôm</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 290,
            left: 180,
            backgroundColor: "#ffefdc",
            width: 90,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>mì cay</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 330,
            left: 20,
            backgroundColor: "#ffefdc",
            width: 155,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>bún tráng trộn</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 330,
            left: 180,
            backgroundColor: "#ffefdc",
            width: 155,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>gà ủ muối</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 380,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 420,
            fontWeight: "700",
            left: 20,
          }}
        >
          ẨM THỰC
        </Text>
        <FlatList
          style={{ position: "absolute", top: 450, width: "50%" }}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: 65,

                borderTopWidth: 1,
                borderRightWidth: 1,
                borderRightColor: "blue",
                borderTopColor: "gray",

                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    width: 30,
                    height: 30,

                    left: 20,
                  }}
                  source={item.imge}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 60,
                    top: 5,
                    width: "65",
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <FlatList
          style={{ position: "absolute", top: 450, width: "50%", left: "50%" }}
          data={data1}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: 65,
                borderTopWidth: 1,
                borderTopColor: "gray",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    width: 30,
                    height: 30,

                    left: 20,
                  }}
                  source={item.imge}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 60,
                    top: 5,
                    width: "65",
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
  },
});

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

export default function KMDaTangGDA({ navigation }) {
  const data6 = [
    {
      iamge1: require("../imageGiaoDoAn/cozyyy.jpg"),
      iamge2: require("../imageGiaoDoAn/icon9.jpg"),
      text1: "Cozy Juice - Sinh Tố & Nước Ép Trái Cây",
      iamge3: require("../imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 330K",
      iamge5: require("../imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/hongtrannhien.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Hông Trà An Nhiên Phan Văn Trị ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Giảm 50%",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 50K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/hutieu.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Hoàng Ký Mỳ-Hũ Tiếu Nguyên Hồng  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 30K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/trausua.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Trà Sữa Núng Nính-Lê Quang Định  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 20K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("../imageGiaoDoAn/antvat158.jpg"),
      iamge2: require("../imageGiaoDoAn/icon9.jpg"),
      text1: "Ăn Vặt 158 Lê Quang Định ",
      iamge3: require("../imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 330K",
      iamge5: require("../imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/phohoi.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Phố Hội  1989-Cơm&Mỳ-Nguyên Hồng ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Giảm 50%",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 50K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/hutieu.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Hoàng Ký Mỳ-Hũ Tiếu Nguyên Hồng  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 30K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/trausua.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Trà Sữa Núng Nính-Lê Quang Định  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 20K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("../imageGiaoDoAn/nhacua.jpg"),
      iamge2: require("../imageGiaoDoAn/icon9.jpg"),
      text1: "Nhà Cua-Cua Cà Mau Chế Biến-Nguyên Hồng ",
      iamge3: require("../imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 330K",
      iamge5: require("../imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/phohoi.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Phố Hội  1989-Cơm&Mỳ-Nguyên Hồng ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Giảm 50%",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 50K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/hutieu.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Hoàng Ký Mỳ-Hũ Tiếu Nguyên Hồng  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 30K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/trausua.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Trà Sữa Núng Nính-Lê Quang Định  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 20K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("../imageGiaoDoAn/nhacua.jpg"),
      iamge2: require("../imageGiaoDoAn/icon9.jpg"),
      text1: "Nhà Cua-Cua Cà Mau Chế Biến-Nguyên Hồng ",
      iamge3: require("../imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 330K",
      iamge5: require("../imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/phohoi.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Phố Hội  1989-Cơm&Mỳ-Nguyên Hồng ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Giảm 50%",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 50K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/hutieu.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Hoàng Ký Mỳ-Hũ Tiếu Nguyên Hồng  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 30K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },
    {
      iamge1: require("/imageGiaoDoAn/trausua.jpg"),
      iamge2: require("/imageGiaoDoAn/icon9.jpg"),
      text1: "Trà Sữa Núng Nính-Lê Quang Định  ",
      iamge3: require("/imageGiaoDoAn/icon10.jpg"),
      text2: "Ưu đãi 95K",
      iamge4: require("/imageGiaoDoAn/giamgia.jpg"),
      text3: "Giảm 20K",
      iamge5: require("/imageGiaoDoAn/address.jpg"),
      text4: "0.7km",
    },

    // Thêm các mục khác vào đây
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("GiaoDoAnTab")}
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
            fontWeight: "600",
            fontSize: 19,
          }}
        >
          KM Đa tầng
        </Text>
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: 45, // Thay đổi vị trí theo yêu cầu của bạn
          right: 0,
          width: "100%",
          height: 2, // Chiều dày của đường gạch ngang
          backgroundColor: "#eeeeee", // Màu của đường gạch ngang
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",

          top: 55,
          left: 10,
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/bolockmdt.jpg")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",

          top: 57,
          left: 70,
          justifyContent: "center",
          width: 145,
          borderRadius: 25,
          height: 42,
          backgroundColor: "#eeeeee",
        }}
      >
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            resizeMode: "center",
            left: 10,
          }}
          source={require("../imageGiaoDoAn/kmkmdt.jpg")}
        ></Image>
        <Text style={{ left: 35, fontSize: 18 }}>Khuyến mại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",

          top: 57,
          left: 220,
          justifyContent: "center",
          width: 115,
          borderRadius: 25,
          height: 42,
          backgroundColor: "#eeeeee",
        }}
      >
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            resizeMode: "center",
            left: 10,
          }}
          source={require("../imageGiaoDoAn/sieusinkmdt.jpg")}
        ></Image>
        <Text style={{ left: 35, fontSize: 18 }}>Siêu xịn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",

          top: 57,
          left: 340,
          justifyContent: "center",
          width: 115,
          borderRadius: 25,
          height: 42,
          backgroundColor: "#eeeeee",
        }}
      >
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            resizeMode: "center",
            left: 10,
          }}
          source={require("../imageGiaoDoAn/qdtkmdt.jpg")}
        ></Image>
        <Text style={{ left: 35, fontSize: 18 }}>Quán đối tác</Text>
      </TouchableOpacity>{" "}
      <ScrollView
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          width: "100%",
          height: "85%",
        }}
      >
        <FlatList
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            backgroundColor: "#f1f5f8",
          }}
          data={data6}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ width: "100%", backgroundColor: "#f1f5f8" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CTSPKMDT")}
                style={{
                  height: 120,
                  backgroundColor: "#FFF",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 7,
                    backgroundColor: "#fff",

                    borderRadius: 10,
                  }}
                  source={item.iamge1}
                ></Image>
                <Image
                  style={{
                    position: "absolute",
                    width: 22,
                    height: 22,
                    left: 120,
                    top: 12,
                    borderRadius: 10,
                  }}
                  source={item.iamge2}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "500",
                    left: 147,
                    top: 10,
                    width: 250,
                  }}
                >
                  {item.text1}
                </Text>

                <Image
                  style={{
                    position: "absolute",
                    width: 17,
                    height: 17,
                    left: 122,
                    top: 80,
                    borderRadius: 10,
                  }}
                  source={item.iamge3}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "500",
                    left: 144,
                    top: 79,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 17,
                    height: 17,
                    left: 220,
                    top: 55,
                    borderRadius: 10,
                  }}
                  source={item.iamge4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "500",
                    left: 245,
                    top: 54,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    left: 133,
                    top: 54,
                    borderRadius: 10,
                  }}
                  source={item.iamge5}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "500",
                    left: 159,
                    top: 52,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text4}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </ScrollView>
      {/* <ScrollView
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          width: "100%",
          height: "85%",
          // borderColor: "black",
          // borderWidth: 1,
        }}
      >
        <Text style={{ fontSize: 17, left: 10 }}>
          Nhiều mã hơn-Giảm nhiều hơn
        </Text>
      </ScrollView>

      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
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

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";

const data = [
  {
    image: require("../imageGiaoDoAn/giaodoan.jpg"),
    text: "Giao đồ ăn",
    id: 1,
  },
  { image: require("../imageGiaoDoAn/giaohang.jpg"), text: "Giao hàng" },
  { image: require("../imageGiaoDoAn/xemay.jpg"), text: "Xe máy" },
  { image: require("../imageGiaoDoAn/oto.jpg"), text: "Ô tô" },
  { image: require("../imageGiaoDoAn/taichinh.jpg"), text: "Tài chính" },
  { image: require("../imageGiaoDoAn/nap3g.jpg"), text: "Nạp ĐT/3G" },
  { image: require("../imageGiaoDoAn/thuthach.jpg"), text: "Thử thách" },
];
const data2 = [
  {
    iamge1: require("/imageGiaoDoAn/hailatra1.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "Hai Lá Trà- Nguyễn Kiệm",
    iamge5: require("/imageGiaoDoAn/star.png"),
    text4: "5.0",
    iamge4: require("/imageGiaoDoAn/address.jpg"),
    text3: "0.7km",
  },
  {
    iamge1: require("/imageGiaoDoAn/bunmam1.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "Bún Mắm Nêm-Hội An",
    iamge5: require("/imageGiaoDoAn/star.png"),
    text4: "4.5",
    iamge4: require("/imageGiaoDoAn/address.jpg"),
    text3: "2.2km",
  },
  {
    iamge1: require("/imageGiaoDoAn/comvanphong2.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "Cơm Văn Phòng-Cơm Gà",
    iamge5: require("/imageGiaoDoAn/star.png"),
    text4: "4.2",
    iamge4: require("/imageGiaoDoAn/address.jpg"),
    text3: "5.7km",
  },

  // Thêm các mục khác vào đây
];

var data3 = [
  { image: require("../imageGiaoDoAn/nap3g20.jpg") },
  { image: require("../imageGiaoDoAn/Vexekhach1.jpg") },
  { image: require("../imageGiaoDoAn/baohiemxe1.jpg") },
  { image: require("../imageGiaoDoAn/thucthach1.jpg") },
  { image: require("../imageGiaoDoAn/goihoivien1.jpg") },
];
var data4 = [
  { image: require("../imageGiaoDoAn/becar1.jpg") },
  { image: require("../imageGiaoDoAn/becar2.jpg") },
  { image: require("../imageGiaoDoAn/becar3.jpg") },
];
const data5 = [
  { iamge: require("../imageGiaoDoAn/image2.jpg"), text: "Siêu deal tặng bạn" },
  { iamge: require("../imageGiaoDoAn/image3.jpg"), text: "Săn ngàn đồ uống" },
  { iamge: require("../imageGiaoDoAn/image4.jpg"), text: "Quán ngon gần bạn" },
  { iamge: require("../imageGiaoDoAn/image5.jpg"), text: "Săn ngàn đồ uống" },
  { iamge: require("../imageGiaoDoAn/image6.jpg"), text: "Quán ngon gần bạn" },
  // Thêm các mục khác vào đây
];

const data6 = [
  {
    iamge: require("../imageGiaoDoAn/motaikhoancare.jpg"),
    text1: "Mở tài khoản cake nhận ngàn ưu đãi",
    text2: "Cake",
    text3: "Mở thẻ ngay",
  },

  {
    iamge: require("../imageGiaoDoAn/betangbanjmoi.jpg"),
    text1: "be tặng bạn mới tới 100K",
    text2: "beCar",
    text3: "Đặt be ngay",
  },

  {
    iamge: require("../imageGiaoDoAn/xemngaycacuudai.jpg"),
    text1: "Xem ngay các ưu đãi NH trên be",
    text2: "Cake",
    text3: "Mở thẻ ngay",
  },
  {
    iamge: require("../imageGiaoDoAn/thuexe4h.jpg"),
    text1: "Thuê xe 4H, be tặng bạn 50K",
    text2: "beRenal",
    text3: "Mở thẻ ngay",
  },
  {
    iamge: require("../imageGiaoDoAn/giam60k.jpg"),
    text1: "Giảm 60K cho đơn hàng 150K",
    text2: "Brewards",
    text3: "The Coffee Bean",
  },
];
const data7 = [
  {
    iamge: require("../imageGiaoDoAn/datbeuudai.jpg"),
    text1: "Đặt be ưu đãi 150K",
    text2: "beCar",
    text3: "Đặt be ngay",
  },

  {
    iamge: require("../imageGiaoDoAn/sieuuudauhd.jpg"),
    text1: "Siêu ưu đãi HD Saison đén 30K",
    text2: "beCar",
    text3: "Đặt be ngay",
  },

  {
    iamge: require("../imageGiaoDoAn/sieuuudaihsdbc.jpg"),
    text1: "Xem ngay các ưu đãi NH trên be",
    text2: "Cake",
    text3: "Mở thẻ ngay",
  },
  {
    iamge: require("../imageGiaoDoAn/busmap.jpg"),
    text1: "Busmap tặng bạn 50K",
    text2: "beRenal",
    text3: "Đặt be ngay",
  },
  {
    iamge: require("../imageGiaoDoAn/uudaikhamsuckhoe.jpg"),
    text1: "Ưu đãi khám sức khỏe",
    text2: "Brewards",
    text3: "ECHO MEDI",
  },
];
export default function GiaoDoAnYT({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <LinearGradient
          colors={["#fdc510", "#fff2a3"]}
          style={{
            position: "absolute",
            width: "100%",
            height: 100,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 20,
              top: 30,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Chào Trần Đình Chương!
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              position: "absolute",
              top: 30,
              right: 10,
            }}
          >
            <Image
              style={{
                width: 53,
                height: 30,
                resizeMode: "cover",
              }}
              source={require("../imageGiaoDoAn/obe.jpg")}
            ></Image>
          </TouchableOpacity>
        </LinearGradient>
        <TextInput
          style={{
            position: "absolute",
            width: "90%",
            height: 50,
            top: 75,
            backgroundColor: "white",
            borderRadius: 5,
            paddingLeft: 55,
            alignSelf: "center",
          }}
          placeholder="Bạn muốn be đưa đến nơi nào?"
          placeholderTextColor={"gray"}
        ></TextInput>
        <Image
          style={{
            position: "absolute",
            width: 26,
            height: 26,
            top: 86,
            left: 35,
            //   resizeMode: "ceover",
          }}
          source={require("../imageGiaoDoAn/search-interface-symbol.png")}
        ></Image>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ position: "absolute", top: 150, width: "100%" }}
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
                <Text>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ position: "absolute", top: 280, width: "100%" }}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                left: 10,
                alignItems: "center",

                width: 85,
                height: 100,
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
                <Text>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 400,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            Quán ngon gần bạn{" "}
          </Text>
          <Image
            style={{
              position: "absolute ",
              width: 11,
              height: 11,
              left: 195,
              top: 10,
            }}
            source={require("../imageGiaoDoAn/Vector.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 10,
            top: 592,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute ",
              width: 150,
              height: 282,
              left: 0,

              resizeMode: "cover",
            }}
            source={require("../imageGiaoDoAn/75k.jpg")}
          ></Image>
        </TouchableOpacity>
        <FlatList
          style={{
            position: "absolute",
            top: 451,
            left: 150,
            height: 281,
            backgroundColor: "#ffd200",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  height: 250,
                  borderRadius: 7,
                  top: 10,
                  marginLeft: 14,
                }}
              >
                <Image
                  style={{
                    width: 140,
                    height: 170,

                    borderRadius: 10,
                    marginBottom: 7,
                    // resizeMode: "center",
                  }}
                  source={item.iamge1}
                ></Image>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    borderRadius: 10,
                  }}
                  source={item.iamge2}
                ></Image>
                <Text
                  // numberOfLines={2}
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 32,
                    top: -20,
                    width: 120,
                    // height: 100,
                  }}
                >
                  {item.text1}
                </Text>

                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -20,
                    borderRadius: 10,
                  }}
                  source={item.iamge4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 35,
                    top: 217,
                    // width: 100,
                    // color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    left: 80,
                    top: 217,
                    borderRadius: 10,
                  }}
                  source={item.iamge5}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 100,
                    top: 217,
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
        <Text
          style={{
            position: "absolute",
            top: 770,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Khám phá dịch vụ
        </Text>
        <FlatList
          horizontal
          style={{ position: "absolute", top: 810, left: 10 }}
          data={data3}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                style={{ width: 130, height: 130 }}
                source={item.image}
              ></Image>
            </TouchableOpacity>
          )}
        ></FlatList>

        <TouchableOpacity
          style={{
            position: "absolute",
            width: "100%",
            // height: 150,
            top: 980,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 150,

              resizeMode: "cover",
            }}
            source={require("../imageGiaoDoAn/e.jpg")}
          ></Image>
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",

            top: 1150,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Điểm đến NÊN-Đi-BE
        </Text>
        <FlatList
          horizontal
          style={{ position: "absolute", top: 1190 }}
          data={data4}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                style={{
                  width: 300,
                  height: 100,
                  borderRadius: 7,
                  marginLeft: 10,
                }}
                source={item.image}
              ></Image>
            </TouchableOpacity>
          )}
        ></FlatList>
        <Text
          style={{
            position: "absolute",

            top: 1320,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Khuyến mãi từ beFood
        </Text>

        <FlatList
          style={{ position: "absolute", top: 1350, width: "150%" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data5}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    margin: 7,
                  }}
                  source={item.iamge}
                ></Image>
                <View style={{ alignSelf: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <Text
          style={{
            position: "absolute",

            top: 1560,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          be tặng bạn bè
        </Text>

        <FlatList
          style={{
            position: "absolute",
            top: 1590,
            width: "50%",
          }}
          showsHorizontalScrollIndicator={false}
          data={data6}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginBottom: 20,
                borderRadius: 7,
                height: 280,
                borderWidth: 1,
                borderColor: "gray",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 160, borderRadius: 7 }}
                source={item.iamge}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  fontSize: 17,
                  fontWeight: "600",
                  top: 170,
                  left: 10,
                  height: 30,
                }}
              >
                {item.text1}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  // width: "90%",
                  color: "#1a6cea",
                  backgroundColor: "#c8e5fd",

                  top: 230,
                  left: 10,
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  color: "gray",
                  top: 250,
                  left: 10,
                }}
              >
                {item.text3}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>
        <FlatList
          style={{
            position: "absolute",
            top: 1590,
            width: "50%",
            left: "50%",
          }}
          showsVerticalScrollIndicator={false}
          data={data7}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginBottom: 20,
                borderRadius: 7,
                height: 280,
                borderWidth: 1,
                borderColor: "gray",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 160, borderRadius: 7 }}
                source={item.iamge}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  fontSize: 17,
                  fontWeight: "600",
                  top: 170,
                  left: 10,
                  height: 30,
                }}
              >
                {item.text1}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  // width: "90%",
                  top: 230,
                  left: 10,
                  color: "#1a6cea",
                  backgroundColor: "#c8e5fd",
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  color: "gray",
                  top: 250,
                  left: 10,
                }}
              >
                {item.text3}
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

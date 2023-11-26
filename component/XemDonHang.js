import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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

let data = [
  {
    Image: require("../imageGiaoDoAn/diachi.jpg"),
    Text1: "Giày cưới KIYOKO",
    Text2: "Nguyên Hồng,phường 11,Gò Vấp, Hồ Chí Minh",
    Image2: require("../imageGiaoDoAn/dengiaohang.jpg"),
  },
  {
    Image: require("../imageGiaoDoAn/guitangmonan.jpg"),
    Text1: "Gữi tặng món ăn ",
    Text2: "Thêm tên và số điện thoại người nhận",
    Image2: require("../imageGiaoDoAn/dengiaohang.jpg"),
  },
  {
    Image: require("../imageGiaoDoAn/giaodonngay.jpg"),
    Text1: "Giao đơn ngay",
    Text2: "Giao sớm nhất có thể",
    Image2: require("../imageGiaoDoAn/dengiaohang.jpg"),
  },
  {
    Image: require("../imageGiaoDoAn/giaodontancua.jpg"),
    Text1: "Giao hàng tận cửa ",
    Text2: "Chỉ 5.000đ",
    Image2: require("../imageGiaoDoAn/dengiaohang.jpg"),
  },
];

export default function XemDonHang({ navigation, route }) {
  // const [data1, setData1] = useState([
  //   {
  //     image1: require("../imageGiaoDoAn/nuocepluu.jpg"),
  //     Text1: "nước ép lựu",
  //     image2: require("../imageGiaoDoAn/DABAN.jpg"),
  //     Text2: "7 đã bán",
  //     Text3: "32.000đ",
  //     count: 0,
  //   },
  //   {
  //     image1: require("../imageGiaoDoAn/nuocepbuoi.jpg"),
  //     Text1: "nước ép lựu",
  //     image2: require("../imageGiaoDoAn/DABAN.jpg"),
  //     Text2: "2 đã bán",
  //     Text3: "32.000đ",
  //     count: 0,
  //   },
  //   {
  //     image1: require("../imageGiaoDoAn/nuocepthom.jpg"),
  //     Text1: "nước ép lựu",
  //     image2: require("../imageGiaoDoAn/DABAN.jpg"),
  //     Text2: "3 đã bán",
  //     Text3: "32.00 đ",
  //     count: 0,
  //   },
  // ]);

  const data1 = route.params;

  const totalAmount = data1.reduce((total, item) => {
    const price = parseFloat(item.Text3);
    return total + price * item.count;
  }, 0);
  // const totalAmount = data1.reduce((total, item) => {
  //   total = parseFloat(item.Text3) * item.count;
  //   return total;
  // }, 0);

  console.log(totalAmount);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CTSPKMDT");
        }}
        style={{
          position: "absolute",
          top: 0,
          // left: 20,
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          paddingLeft: 20,
          paddingTop: 20,
          // borderBottomWidth: 1,
        }}
      >
        <Image
          style={{ width: 20, height: 20, resizeMode: "center" }}
          source={require("../imageGiaoDoAn/backxemay.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: 15,
            left: 50,
            fontWeight: "600",
            fontSize: 19,
          }}
        >
          Thanh Toán
        </Text>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ position: "absolute", width: "100%", top: 55, height: "70%" }}
      >
        <Text
          style={{
            position: "absolute",
            top: 20,
            color: "gray",
            left: 20,
            width: "100%",
          }}
        >
          GIAO TỚI
        </Text>

        <FlatList
          style={{
            position: "absolute",
            width: "100%",
            top: 50,
            backgroundColor: "#fff",
            height: 270,
          }}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ marginBottom: 20 }}>
              <Image
                style={{
                  width: 30,
                  height: 25,
                  resizeMode: "center",
                  marginBottom: 20,
                  top: 30,
                  left: 20,
                }}
                source={item.Image}
              ></Image>

              <Text
                style={{
                  position: "absolute",
                  top: 20,
                  left: 60,
                  fontSize: 17,
                }}
              >
                {item.Text1}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  top: 44,
                  color: "gray",
                  left: 60,
                }}
              >
                {item.Text2}
              </Text>
              <Image
                style={{
                  position: "absolute",
                  width: 10,
                  height: 10,
                  resizeMode: "center",
                  right: 15,
                  top: 35,
                }}
                source={item.Image2}
              ></Image>
            </TouchableOpacity>
          )}
        ></FlatList>

        <Text
          style={{
            position: "absolute",
            top: 330,
            color: "gray",
            left: 20,
            width: "100%",
          }}
        >
          ĐƠN HÀNG
        </Text>
        <ScrollView
          style={{
            position: "relative",
            width: "100%",
            top: 360,
            height: 400,
            backgroundColor: "#fff",
          }}
        >
          <FlatList
            data={data1}
            showsVerticalScrollIndicator
            style={{
              position: "relative",
              width: "100%",
              // top: 360,
              height: 400,
              backgroundColor: "#fff",
            }}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "center",
                    marginBottom: 20,
                    top: 20,
                    left: 20,
                    borderRadius: 5,
                  }}
                  source={item.image1}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 80,
                    top: 20,
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {item.count}x
                </Text>

                <Text
                  style={{
                    position: "absolute",
                    left: 130,
                    top: 20,
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {item.Text1}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    left: 130,
                    top: 45,
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {item.Text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    resizeMode: "center",
                    marginBottom: 20,
                    top: 30,
                    right: 20,
                    borderRadius: 5,
                  }}
                  source={require("../imageGiaoDoAn/edittt.jpg")}
                ></Image>
              </TouchableOpacity>
            )}
          ></FlatList>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            top: 600,
            height: 500,
            width: "100%",
            backgroundColor: "#f1f5f8",
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: 20,

              color: "gray",
              left: 20,
              width: "100%",
            }}
          >
            THƯỞNG ĐƯỢC TẶNG KÈM
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              backgroundColor: "#FFF",
              top: 50,
              left: 20,
              width: "70%",
              height: 100,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../imageGiaoDoAn/nuocepbuoi.jpg")}
            ></Image>
            <Text
              style={{ position: "absolute", fontSize: 17, top: 10, left: 100 }}
            >
              Nước ép thơm-cam size L
            </Text>
            <Text
              style={{
                position: "absolute",
                fontSize: 16,
                bottom: 10,
                left: 100,
                fontWeight: "600",
              }}
            >
              32.000đ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              backgroundColor: "#FFF",
              top: 50,
              left: 300,
              width: "70%",
              height: 100,
              padding: 10,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../imageGiaoDoAn/nuocepluu.jpg")}
            ></Image>
            <Text
              style={{ position: "absolute", fontSize: 17, top: 10, left: 100 }}
            >
              Nước ép thơm-cam size L
            </Text>
            <Text
              style={{
                position: "absolute",
                fontSize: 16,
                bottom: 10,
                left: 100,
                fontWeight: "600",
              }}
            >
              32.000đ
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../imageGiaoDoAn/tipchotaixe.jpg")}
          style={{
            position: "absolute",
            resizeMode: "center",
            top: 750,
            width: "95%",
            height: 250,
            alignSelf: "center",
            borderRadius: 15,
          }}
        ></Image>

        <View
          style={{
            position: "absolute",
            top: 800,
            height: 240,
            top: 990,
            width: "100%",
            backgroundColor: "#fff",
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          <Text style={{ marginBottom: 5, fontSize: 19, fontWeight: "600" }}>
            Thanh toán{" "}
          </Text>

          <Text
            style={{
              marginBottom: 5,
              fontSize: 16,
              width: "100%",
              // backgroundColor: "red",
            }}
          >
            Tạm phí 6 phần{" "}
            <Text style={{ position: "absolute", right: 10 }}>
              {totalAmount}.000 đ
            </Text>
          </Text>
          <Text style={{ marginBottom: 5, fontSize: 16, width: "100%" }}>
            Phí áp dụng{" "}
            <Text style={{ position: "absolute", right: 10 }}>21.000đ</Text>
          </Text>
          <Text style={{ marginBottom: 5, fontSize: 16, width: "100%" }}>
            QUANMOITHEM - Giảm 5.000đ
            <Text style={{ position: "absolute", right: 10, color: "#58b87f" }}>
              -5.000đ
            </Text>
          </Text>
          <Text style={{ marginBottom: 5, fontSize: 16, width: "100%" }}>
            Giảm 35% giảm tối đã 25K cho đơn hà...
            <Text style={{ position: "absolute", right: 10, color: "#58b87f" }}>
              -25.000đ
            </Text>
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 200,
          // borderWidth: 1,
          // borderColor: "red",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 170,
            height: 50,
            width: "100%",
            justifyContent: "center",
            backgroundColor: "#e7e8ea",
          }}
        >
          <Image
            style={{ position: "absolute", width: 20, height: 20, left: 10 }}
            source={require("../imageGiaoDoAn/baohiemdonhang.jpg")}
          ></Image>
          <Text style={{ left: 40 }}>Đơn hàng có Bảo hiểm Food Care</Text>
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            bottom: 140,
            left: 20,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          Tổng số tiền{" "}
        </Text>
        <Text
          style={{
            position: "absolute",
            bottom: 140,
            right: 100,
            fontWeight: "500",
            fontSize: 16,
            textDecorationLine: "line-through",
            color: "gray",
          }}
        >
          {totalAmount}.000đ
        </Text>
        <Text
          style={{
            position: "absolute",
            bottom: 140,
            right: 20,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {totalAmount - 9}.000đ
        </Text>
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            bottom: 110,
            left: 20,
          }}
          source={require("../imageGiaoDoAn/becoi.jpg")}
        ></Image>

        <TouchableOpacity
          style={{ position: "absolute", bottom: 105, right: 14 }}
        >
          <Image
            style={{ width: 30, height: 30, resizeMode: "center" }}
            source={require("../imageGiaoDoAn/chon1.jpg")}
          ></Image>
        </TouchableOpacity>

        <Text
          style={{
            position: "absolute",
            bottom: 110,
            left: 40,
            // fontWeight: "500",
            fontSize: 16,
          }}
        >
          {" "}
          Sử dụng 3.00 bePoint{" "}
        </Text>

        <View
          style={{
            width: "100%",
            position: "absolute",
            backgroundColor: "#e9ecf4",
            height: 1,
            bottom: 136,
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            bottom: 110,
            right: 60,
            // fontWeight: "500",
            fontSize: 16,
          }}
        >
          {" "}
          3.000đ
        </Text>

        <View
          style={{
            width: "100%",
            position: "absolute",
            backgroundColor: "#e9ecf4",
            height: 1,
            bottom: 100,
          }}
        ></View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 65,
            right: 40,
            width: 100,
            height: 30,
            left: 10,
            borderRightColor: "gray",
            borderRightWidth: 1,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20, resizeMode: "center", padding: 20 }}
            source={require("../imageGiaoDoAn/tiendh.jpg")}
          ></Image>
          <Text
            style={{
              position: "absolute",
              left: 40,
              fontSize: 10,
              fontWeight: "700",
            }}
          >
            TIỀN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 65,
            right: 40,
            width: 100,
            height: 30,
            left: 120,
            borderRightColor: "gray",
            borderRightWidth: 1,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20, resizeMode: "center", padding: 20 }}
            source={require("../imageGiaoDoAn/khuyenmaidh.jpg")}
          ></Image>
          <Text
            style={{
              position: "absolute",
              left: 40,
              fontSize: 10,
              fontWeight: "700",
            }}
          >
            KHUYẾN..
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 65,
            right: 40,
            width: 110,
            height: 30,
            left: 210,
            borderRightColor: "gray",
            borderRightWidth: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 40,
              fontSize: 10,
              fontWeight: "700",
            }}
          >
            GHI CHÚ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 65,
            right: 40,
            width: 110,
            height: 30,
            left: 310,
            borderRightColor: "gray",
            borderRightWidth: 1,
            // justifyContent: "center",
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 40,
              fontSize: 17,
              fontWeight: "700",
              top: 0,
            }}
          >
            ...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            width: "100%",
            height: 40,
            backgroundColor: "#fdc50d",
            bottom: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "600" }}>Đặt món</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <Text>KHUYẾN MÃ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>GHI CHÚ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>...</Text>
        </TouchableOpacity> */}
      </View>

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
    height: "100%",
  },
});

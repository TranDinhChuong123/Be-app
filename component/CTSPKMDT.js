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

const data1 = [
  { Text: "Món phải thử" },
  { Text: "Menu" },
  { Text: "Sinh Tố" },
  { Text: "Trà sữa" },
];

export default function CTSPKMDT({ navigation }) {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [data1, setData1] = useState([
    {
      image1: require("../imageGiaoDoAn/nuocepbuoi.jpg"),
      Text1: "Nước ép bưởi",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "2 đã bán",
      Text3: "55.000đ",
      count: 0,
    },

    {
      image1: require("../imageGiaoDoAn/nuocepthom.jpg"),
      Text1: "nước ép lựu",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "3 đã bán",
      Text3: "32.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/nuocepthom.jpg"),
      Text1: "Nước ép thơm",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "5 đã bán",
      Text3: "52.000đ",

      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtotao.jpg"),
      Text1: "Sinh tố táo",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "19 đã bán",
      Text3: "38.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtoxoai.jpg"),
      Text1: "Sinh tố xoài",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "3 đã bán",
      Text3: "32.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/nuocepluu.jpg"),
      Text1: "nước ép lựu",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "6 đã bán",
      Text3: "80.00 đ",
      count: 0,
    },
  ]);

  const [data, setData] = useState([
    {
      image1: require("../imageGiaoDoAn/nuocepchanhday.jpg"),
      Text1: "Nước ép chanh dây",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "7 đã bán",
      Text3: "32.000đ",

      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtodau.jpg"),
      Text1: "Sinh tố dâu",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "2 đã bán",
      Text3: "55.000đ",
      count: 0,
    },

    {
      image1: require("../imageGiaoDoAn/nuocepthom.jpg"),
      Text1: "nước ép lựu",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "3 đã bán",
      Text3: "32.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtotao.jpg"),
      Text1: "Sinh tố táo",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "19 đã bán",
      Text3: "38.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtoxoai.jpg"),
      Text1: "Sinh tố xoài",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "3 đã bán",
      Text3: "32.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/nuocepluu.jpg"),
      Text1: "nước ép lựu",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "6 đã bán",
      Text3: "80.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtomangcau.jpg"),
      Text1: "Sinh tố mảng cầu",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "12 đã bán",
      Text3: "69.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtosapo.jpg"),
      Text1: "Sinh tố sapo",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "7 đã bán",
      Text3: "43.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/sinhtogangbo.jpg"),
      Text1: "Sinh tố dưa gang bơ",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "7 đã bán",
      Text3: "28.00 đ",
      count: 0,
    },
    {
      image1: require("../imageGiaoDoAn/raumadauxanh.jpg"),
      Text1: "Rau má đậu xanh",
      image2: require("../imageGiaoDoAn/DABAN.jpg"),
      Text2: "1 đã bán",
      Text3: "20.00 đ",
      count: 0,
    },
  ]);
  const handleIncrement = (index) => {
    const newData = [...data];

    newData[index].count = newData[index].count + 1;
    setData(newData);

    if (newData[index].count == 1) {
      const priceToAdd = parseFloat(newData[index].Text3);
      setTotalAmount((prevTotal) => prevTotal + priceToAdd);
      setCart((prevCart) => [...prevCart, newData[index]]);
    }
    if (newData[index].count > 1) {
      const newDataCart = [...cart];
      newDataCart[index].count = newData[index].count;
      setCart(newDataCart);
    }
  };

  const handleDecrement = (index) => {
    const newData = [...data];
    newData[index].count = Math.max(0, newData[index].count - 1);
    setData(newData);

    if (newData[index].count >= 0) {
      const priceToAdd = parseFloat(newData[index].Text3);
      setTotalAmount((prevTotal) => prevTotal - priceToAdd);
      setCart((prevCart) => [...prevCart, newData[index].Text3]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("KMDaTangGDA")}
        style={{
          position: "absolute",
          top: 10,
          left: 20,
          width: "73%",
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
          Cozy Juice - Sinh Tố & N...
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 60,
          top: 8,
        }}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/sharect.jpg")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 8,
        }}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/thatim.jpg")}
        ></Image>
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          height: 70,
          borderColor: "red",
          // borderWidth: 1,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("XemDonHang", cart);
          }}
          style={{
            position: "absolute",
            // right: 60,
            right: 15,
            backgroundColor: "#ffd200",
            width: "68%",
            height: 50,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Xem đơn hàng
            {totalAmount > 0 && (
              <Text style={{ fontSize: 19, fontWeight: "700", marginLeft: 5 }}>
                {totalAmount}.000đ
              </Text>
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 60,
            left: 15,
            backgroundColor: "#e7e8ea",
            width: "19%",
            height: 50,
            borderRadius: 10,

            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              width: 25,
              height: 25,
              left: 14,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/giohang.jpg")}
          ></Image>
          <Text style={{ fontSize: 20, fontWeight: "700", left: 45 }}>1</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          top: 45, // Thay đổi vị trí theo yêu cầu của bạn
          right: 0,
          width: "85%",
          height: 2, // Chiều dày của đường gạch ngang
          backgroundColor: "#eeeeee", // Màu của đường gạch ngang
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 45,
          left: 15,
          // backgroundColor: "#e7e8ea",
          width: "19%",
          height: 50,
          borderRadius: 10,

          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 25,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/searchst.jpg")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 45,
          left: 65,
          // backgroundColor: "#e7e8ea",
          width: "19%",
          height: 50,
          borderRadius: 10,

          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 25,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/listst.jpg")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 120,
          borderBottomColor: "blue",
          borderBottomWidth: 2,
        }}
      >
        <Text
          style={{ color: "blue", fontSize: 18, fontWeight: "700", bottom: 10 }}
        >
          Món ăn thử
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 240,
        }}
      >
        <Text
          style={{ fontSize: 18, fontWeight: "500", bottom: 10, color: "gray" }}
        >
          Menu
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 300,
        }}
      >
        <Text
          style={{ fontSize: 18, fontWeight: "500", bottom: 10, color: "gray" }}
        >
          Sinh Tố
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 370,
        }}
      >
        <Text
          style={{ fontSize: 18, fontWeight: "500", bottom: 10, color: "gray" }}
        >
          Trà
        </Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ position: "absolute", top: 100, width: "100%", height: "77%" }}
      >
        <Image
          style={{
            position: "absolute",
            // top: 100,
            width: "100%",
            height: 200,
            resizeMode: "cover",
          }}
          source={require("../imageGiaoDoAn/sinhtoaa.jpg")}
        ></Image>

        <Image
          style={{
            position: "absolute",
            top: 210,
            width: 20,
            height: 20,
            left: 15,
            resizeMode: "cover",
          }}
          source={require("../imageGiaoDoAn/tich.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: 205,

            left: 40,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Cozy Juice -Sinh Tố & Nước Ép Trái Cây -Dương Quảng Hàm
        </Text>

        <Image
          style={{
            position: "absolute",
            top: 246,
            width: "100%",
            height: 60,
            left: 15,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/hinhaaa.jpg")}
        ></Image>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 299.9,

            // backgroundColor: "#e7e8ea",
            // width: 150,
            // height: 40,
            borderRadius: 10,
            left: 15,

            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 130,
              height: 50,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/hengiaohang.jpg")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 299,

            // backgroundColor: "#e7e8ea",
            // width: 150,
            // height: 40,
            borderRadius: 10,
            left: 150,

            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 115,
              height: 50,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/donnhom.jpg")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 299,

            // backgroundColor: "#e7e8ea",
            // width: 150,
            // height: 40,
            borderRadius: 10,
            left: 270,

            justifyContent: "cover",
          }}
        >
          <Image
            style={{
              width: 110,
              height: 50,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/dontang.jpg")}
          ></Image>
        </TouchableOpacity>

        <Image
          style={{
            position: "absolute",
            left: 15,
            top: 350,
            width: 130,
            height: 50,
            resizeMode: "center",
          }}
          source={require("../imageGiaoDoAn/uudaidanhchobanj.jpg")}
        ></Image>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 15,
            top: 365,
          }}
        >
          <Text style={{ color: "blue" }}> Xem tất cả(8)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 353,
            borderRadius: 10,
            left: 15,
            justifyContent: "cover",
          }}
        >
          <Image
            style={{
              width: 290,
              height: 140,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/giam60them.jpg")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 390,
            borderRadius: 10,
            right: 15,
            justifyContent: "cover",
          }}
        >
          <Image
            style={{
              width: 70,
              height: 66,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/chaongaymoi.jpg")}
          ></Image>
        </TouchableOpacity>

        <Text
          style={{
            position: "absolute",
            left: 15,
            top: 470,
            width: 130,
            height: 50,
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Món phải thử
        </Text>

        <FlatList
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            height: 281,
            width: 1000,
            // backgroundColor: "#ffd200",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data1}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  height: 250,
                  borderRadius: 7,
                  top: 10,
                  marginLeft: 14,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                <Image
                  style={{
                    width: 140,
                    height: 150,

                    borderTopLeftRadius: 7,
                    marginBottom: 7,
                    // resizeMode: "center",
                  }}
                  source={item.image1}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 155,
                    fontSize: 17,
                  }}
                >
                  {item.Text1}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 20,
                    top: 186,
                    resizeMode: "center",
                  }}
                  source={item.image2}
                />
                <Text
                  style={{
                    position: "absolute",
                    left: 39,
                    top: 184,
                    color: "gray",
                  }}
                >
                  {item.Text2}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    left: 20,
                    top: 210,
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  {item.Text3}
                </Text>

                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 13,
                    top: 210,
                    backgroundColor: "#ffd201",
                    height: 25,
                    width: 25,
                    alignItems: "center",
                    // justifyContent: "center",

                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: -2,
                      fontSize: 20,
                      fontWeight: "700",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <View
          style={{
            position: "absolute",
            width: "100%",
            top: 785,
            height: 10,
            backgroundColor: "#f1f5f8",
          }}
        />

        <Text
          style={{
            position: "absolute",
            top: 802,
            left: 20,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Menu
        </Text>

        {/* menu */}
        <FlatList
          style={{
            position: "absolute",
            top: 830,
            left: 0,
            // height: "100%",
            width: "100%",
            // backgroundColor: "#ffd200",
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 130,
                  borderBottomLeftRadius: 7,
                  borderTopLeftRadius: 7,
                  top: 10,
                  marginLeft: 14,
                  borderTopWidth: 1,
                  borderColor: "gray",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{
                    width: 140,
                    height: 130,
                    borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                    marginBottom: 7,
                    // resizeMode: "center",
                  }}
                  source={item.image1}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 150,
                    top: 10,
                    fontSize: 17,
                  }}
                >
                  {item.Text1}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 150,
                    top: 40,
                    resizeMode: "center",
                  }}
                  source={item.image2}
                />
                <Text
                  style={{
                    position: "absolute",
                    left: 170,
                    top: 38,
                    color: "gray",
                  }}
                >
                  {item.Text2}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    left: 150,
                    bottom: 10,
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  {item.Text3}
                </Text>
                <TouchableOpacity
                  onPress={() => handleIncrement(index)}
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 30,
                    backgroundColor: "#ffd201",
                    height: 25,
                    width: 25,
                    alignItems: "center",
                    // justifyContent: "center",

                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: -2,
                      fontSize: 20,
                      fontWeight: "700",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>

                {item.count > 0 && (
                  <View style={{ top: -7 }}>
                    <Text
                      style={{
                        position: "absolute",
                        right: 65,
                        bottom: 12,
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                    >
                      {item.count}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleDecrement(index)}
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 85,
                        backgroundColor: "#e7e8ea",
                        height: 25,
                        width: 25,
                        alignItems: "center",
                        // justifyContent: "center",

                        borderRadius: 7,
                      }}
                    >
                      <Text
                        style={{
                          position: "absolute",
                          top: -2,
                          fontSize: 20,
                          fontWeight: "700",
                        }}
                      >
                        −
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
});

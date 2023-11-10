import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  PanResponder,
  SectionList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Thêm dòng này
const Tab = createBottomTabNavigator();
import React, { useState } from "react";
import GiaoDoaAnTK from "./GiaoDoAnTK";
const data = [
  { iamge: require("../imageGiaoDoAn/image2.jpg"), text: "Siêu deal tặng bạn" },
  { iamge: require("../imageGiaoDoAn/image3.jpg"), text: "Săn ngàn đồ uống" },
  { iamge: require("../imageGiaoDoAn/image4.jpg"), text: "Quán ngon gần bạn" },
  { iamge: require("../imageGiaoDoAn/image5.jpg"), text: "Săn ngàn đồ uống" },
  { iamge: require("../imageGiaoDoAn/image6.jpg"), text: "Quán ngon gần bạn" },
  // Thêm các mục khác vào đây
];
const data1 = [
  {
    iamge1: require("../imageGiaoDoAn/image7.jpg"),
    iamge2: require("../imageGiaoDoAn/icon9.jpg"),
    text1: "Highlands Coffee  ",
    iamge3: require("../imageGiaoDoAn/icon10.jpg"),
    text2: "Ưu đãi 95K",
    iamge4: require("../imageGiaoDoAn/star.png"),
    text3: "49(487)",
    iamge5: require("../imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },
  {
    iamge1: require("/imageGiaoDoAn/image8.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "GuTa CaFE-Phan Văn Trị  ",
    iamge3: require("/imageGiaoDoAn/icon10.jpg"),
    text2: "Giảm 50%",
    iamge4: require("/imageGiaoDoAn/star.png"),
    text3: "5(47)",
    iamge5: require("/imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },
  {
    iamge1: require("/imageGiaoDoAn/image9.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "Highlands Coffee  ",
    iamge3: require("/imageGiaoDoAn/icon10.jpg"),
    text2: "Ưu đãi 95K",
    iamge4: require("/imageGiaoDoAn/star.png"),
    text3: "49(487)",
    iamge5: require("/imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },
  {
    iamge1: require("/imageGiaoDoAn/image7.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "Highlands Coffee  ",
    iamge3: require("/imageGiaoDoAn/icon10.jpg"),
    text2: "Ưu đãi 95K",
    iamge4: require("/imageGiaoDoAn/star.png"),
    text3: "49(487)",
    iamge5: require("/imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },

  // Thêm các mục khác vào đây
];
const data6 = [
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
const data2 = [
  {
    iamge1: require("/imageGiaoDoAn/image10.jpg"),
    iamge2: require("/imageGiaoDoAn/icon9.jpg"),
    text1: "Highlands Coffee  ",
    iamge3: require("/imageGiaoDoAn/icon10.jpg"),
    text2: "Ưu đãi 95K",
    iamge4: require("/imageGiaoDoAn/star.png"),
    text3: "49(487)",
    iamge5: require("/imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },
  {
    iamge1: require("../imageGiaoDoAn/image11.jpg"),
    iamge2: require("../imageGiaoDoAn/icon9.jpg"),
    text1: "GuTa CaFE-Phan Văn Trị  ",
    iamge3: require("../imageGiaoDoAn/icon10.jpg"),
    text2: "Giảm 50%",
    iamge4: require("../imageGiaoDoAn/star.png"),
    text3: "5(47)",
    iamge5: require("../imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },
  {
    iamge1: require("../imageGiaoDoAn/image8.jpg"),
    iamge2: require("../imageGiaoDoAn/icon9.jpg"),
    text1: "Highlands Coffee  ",
    iamge3: require("../imageGiaoDoAn/icon10.jpg"),
    text2: "Ưu đãi 95K",
    iamge4: require("../imageGiaoDoAn/star.png"),
    text3: "49(487)",
    iamge5: require("../imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },
  {
    iamge1: require("../imageGiaoDoAn/image7.jpg"),
    iamge2: require("../imageGiaoDoAn/icon9.jpg"),
    text1: "Highlands Coffee  ",
    iamge3: require("../imageGiaoDoAn/icon10.jpg"),
    text2: "Ưu đãi 95K",
    iamge4: require("../imageGiaoDoAn/star.png"),
    text3: "49(487)",
    iamge5: require("../imageGiaoDoAn/address.jpg"),
    text4: "0.7km",
  },

  // Thêm các mục khác vào đây
];
const data3 = [
  {
    iamge: require("../imageGiaoDoAn/brand1.jpg"),
    text: "Trà Sữa và Milo Dầm",
  },
  { iamge: require("../imageGiaoDoAn/brand2.jpg"), text: "Hightlands Coffee" },
  {
    iamge: require("../imageGiaoDoAn/brand3.jpg"),
    text: "Bún chả Hà Nội 1982",
  },
  { iamge: require("../imageGiaoDoAn/brand4.jpg"), text: "Quán tài ký" },
  { iamge: require("../imageGiaoDoAn/brand5.jpg"), text: "Gà ủ muối" },

  // Thêm các mục khác vào đây
];
const data4 = [
  {
    iamge: require("../imageGiaoDoAn/icon1.jpg"),
    text: "KM Đa tầng",
  },
  {
    iamge: require("../imageGiaoDoAn/icon2.jpg"),
    text: "Siêu deal",
  },
  {
    iamge: require("../imageGiaoDoAn/icon3.jpg"),
    text: "Đồ ăn nhanh",
  },
  {
    iamge: require("../imageGiaoDoAn/icon4.jpg"),
    text: "Trà Sữa",
  },

  // Thêm các mục khác vào đây
];
const data5 = [
  {
    iamge: require("../imageGiaoDoAn/icon5.jpg"),
    text: "KM Đa tầng",
  },
  {
    iamge: require("../imageGiaoDoAn/icon6.jpg"),
    text: "Siêu deal",
  },
  {
    iamge: require("../imageGiaoDoAn/icon7.jpg"),
    text: "Đồ ăn nhanh",
  },
  {
    iamge: require("../imageGiaoDoAn/icon8.jpg"),
    text: "Trà Sữa",
  },

  // Thêm các mục khác vào đây
];
export default function GiaoDoAn() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("/imageGiaoDoAn/back.png")}
      ></Image>

      <ScrollView
        style={{ position: "absolute", width: "100%", top: 80, height: "100%" }}
      >
        <Image
          style={{
            position: "absolute",
            width: "100%",
            height: 150,
            top: 0,
            resizeMode: "cover",
          }}
          source={require("../imageGiaoDoAn/e.jpg")}
        ></Image>
        <FlatList
          style={{ position: "absolute", top: 170 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data4}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    margin: 15,
                    resizeMode: "center",
                    left: 16,
                  }}
                  source={item.iamge}
                ></Image>
                <Text textAlign="center" style={{ left: 30, width: 90 }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <FlatList
          style={{ position: "absolute", top: 300 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data5}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    margin: 15,
                    resizeMode: "center",
                    left: 16,
                  }}
                  source={item.iamge}
                ></Image>
                <Text style={{ left: 30 }}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TouchableOpacity
          style={{ position: "absolute", top: 450, alignSelf: "center" }}
        >
          <Image
            style={{ width: 350, height: 50, borderRadius: 5 }}
            source={require("../imageGiaoDoAn/image1.jpg")}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 530,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        {/* kham pha mon ngon gan day */}
        <Text
          style={{
            position: "absolute",
            top: 570,
            left: 15,
            fontWeight: "700",
            fontSize: 19,
          }}
        >
          Khám phá món ngon gần đây
        </Text>
        <FlatList
          style={{ top: 615, left: -60, width: "150%" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 180,
                    height: 180,
                    margin: 7,
                  }}
                  source={item.iamge}
                ></Image>
                <Text style={{ fontSize: 15, fontWeight: "700", left: 30 }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 860,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <TouchableOpacity style={{ position: "absolute", top: 890, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../imageGiaoDoAn/phaohoa.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Ngày độc thân 11.11
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 175,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/phaohoa1.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -1,
              color: "gray",
            }}
          >
            Deal độc nhất mua 1 tặng 1
          </Text>
        </TouchableOpacity>
        {/* list ngay doc than  */}
        <FlatList
          style={{ position: "absolute", top: 945, left: -50 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    margin: 7,
                    borderRadius: 10,
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
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: -20,
                    width: 100,
                  }}
                >
                  {item.text1} "..."
                </Text>

                <Image
                  style={{
                    width: 17,
                    height: 17,
                    left: 20,
                    top: -15,
                    borderRadius: 10,
                  }}
                  source={item.iamge3}
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 40,
                    top: -35,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -30,
                    borderRadius: 10,
                  }}
                  source={item.iamge4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 80,
                    top: 200,
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
                    top: 199,
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
        {/* thang ngang */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 1190,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        {/* nang luong h chieu */}
        <TouchableOpacity style={{ position: "absolute", top: 1220, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../imageGiaoDoAn/hand.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Năng lượng giờ chiều
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 185,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/happy.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -0,
              color: "gray",
            }}
          >
            Deal chồng Freeship. Duy nhất 13:00 -16:59
          </Text>
        </TouchableOpacity>
        {/*  list nang luong h chieu */}
        <FlatList
          style={{ position: "absolute", top: 1275, left: -10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    margin: 7,
                    borderRadius: 10,
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
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: -20,
                    width: 100,
                  }}
                >
                  {item.text1} "..."
                </Text>

                <Image
                  style={{
                    width: 17,
                    height: 17,
                    left: 20,
                    top: -15,
                    borderRadius: 10,
                  }}
                  source={item.iamge3}
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 40,
                    top: -35,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -30,
                    borderRadius: 10,
                  }}
                  source={item.iamge4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 80,
                    top: 200,
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
                    top: 199,
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
        {/* thang nagng */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 1525,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        {/* deal thuong hieu lon */}
        <TouchableOpacity style={{ position: "absolute", top: 1560, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../imageGiaoDoAn/gift.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Deal thương hiệu lớn
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 185,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/gift1.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -0,
              color: "gray",
            }}
          >
            Ứu đãi chất từ thương hiệu uy tín
          </Text>
        </TouchableOpacity>
        <FlatList
          style={{ position: "absolute", top: 1640, left: -50 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data3}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 7,
                  }}
                  source={item.iamge}
                ></Image>
                <Text
                  numberOfLines={2}
                  textAlign="center"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    width: 90,
                    left: 20,
                    fontWeight: "700",
                    fontSize: 15,
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        {/* mon ngon cho ngay vui */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 1820,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <TouchableOpacity style={{ position: "absolute", top: 1855, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../imageGiaoDoAn/hand.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Món ngon cho ngày vui
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 205,
              resizeMode: "center",
            }}
            source={require("../imageGiaoDoAn/happy.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -0,
              color: "gray",
            }}
          >
            Deal chồng Freeship. Duy nhất 13:00 -16:59
          </Text>
        </TouchableOpacity>
        {/*  list nang luong h chieu */}
        <FlatList
          style={{ position: "absolute", top: 1905, left: -60 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          // numColumns={2} // Đặt số cột là 2
          data={data2}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    margin: 7,
                    borderRadius: 10,
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
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: -20,
                    width: 100,
                  }}
                >
                  {item.text1} "..."
                </Text>

                <Image
                  style={{
                    width: 17,
                    height: 17,
                    left: 20,
                    top: -15,
                    borderRadius: 10,
                  }}
                  source={item.iamge3}
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 40,
                    top: -35,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -30,
                    borderRadius: 10,
                  }}
                  source={item.iamge4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 80,
                    top: 200,
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
                    top: 199,
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
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 2150,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            width: "100%",
            height: 25,
            top: 2180,
            fontSize: 20,
            fontWeight: "700",
            // backgroundColor: "#f2f3f5",
          }}
        >
          Quán ngon gần đây
        </Text>

        <FlatList
          style={{ position: "absolute", top: 2220, width: "100%" }}
          data={data6}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ width: "100%" }}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 7,

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
                    fontWeight: "700",
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
                    fontWeight: "640",
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
                    fontWeight: "640",
                    left: 250,
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
                    fontWeight: "700",
                    left: 155,
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

        {/* <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 2820,
            // backgroundColor: "#f2f3f5",
            backgroundColor: "black",
          }}
        ></View> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

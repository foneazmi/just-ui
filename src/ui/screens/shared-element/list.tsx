import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Layout } from "../../components";
import { navigator } from "../../../helpers";
import { AntDesign, Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const DATA = [
  {
    title: "Re Birth - 9th Edition",
    price: "$27.96",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum 1",
    price: "$23.96",
    image:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum 2",
    price: "$17.96",
    image:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const SharedElementScreen = () => {
  return (
    <Layout style={{ backgroundColor: "#FFFFFF" }}>
      <Pressable
        onPress={() => navigator.goBack()}
        style={{
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Feather name="chevron-left" size={20} color="#8A8B90" />
        <View
          style={{
            flex: 1,
            backgroundColor: "#F9F9F9",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            marginLeft: 8,
          }}
        >
          <Text style={{ color: "#8A8B90" }}>Search By Book Name</Text>
        </View>
      </Pressable>
      <View>
        <View
          style={{
            margin: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#1C1D28" }}>
            New Release
          </Text>
          <Text style={{ color: "#6665FF", fontSize: 15, fontWeight: "700" }}>
            View all
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigator.navigate("shared-element-detail", item)
                }
                style={{
                  marginLeft: 16,
                  width: 125,
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    width: 125,
                    height: 200,
                  }}
                >
                  <Animated.Image
                    sharedTransitionTag={`${item.title}-img`}
                    source={{ uri: item.image }}
                    style={{ width: 125, height: 200 }}
                  />
                  <Animated.View
                    sharedTransitionTag={`${item.title}-rating`}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      borderBottomLeftRadius: 10,
                      padding: 8,
                      opacity: 0.75,
                      flexDirection: "row",
                      backgroundColor: "white",
                    }}
                  >
                    <AntDesign name="star" size={16} color="#FFB200" />
                    <Text
                      style={{
                        color: "#FFB200",
                        marginLeft: 4,
                        fontWeight: "bold",
                      }}
                    >
                      5.0
                    </Text>
                  </Animated.View>
                </View>
                <Text style={{ marginTop: 4 }}>{item.title}</Text>
                <Text style={{ marginTop: 2, fontWeight: "bold" }}>
                  {item.price}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    </Layout>
  );
};

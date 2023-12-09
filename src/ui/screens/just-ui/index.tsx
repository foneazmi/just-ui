import React from "react";
import { FlatList, Pressable, Text } from "react-native";
import { Layout } from "../../components";
import { navigator } from "../../../helpers";

const DATA = [
  {
    title: "Hello Animation",
    route: "hello-animation",
  },
  {
    title: "Shared Element",
    route: "shared-element",
  },
  {
    title: "Link Aja",
    route: "link-aja",
  },
  {
    title: "Coming Soon",
    route: "coming-soon",
  },
];

export const JustUIScreen = () => {
  return (
    <Layout>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: 8,
          fontSize: 20,
        }}
      >
        Just UI
      </Text>
      <FlatList
        data={DATA}
        numColumns={2}
        style={{ paddingHorizontal: 4 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigator.navigate(item.route)}
            style={{
              flex: 1,
              marginHorizontal: 4,
              marginTop: 8,
              backgroundColor: "#EBE3D5",
              padding: 16,
            }}
          >
            <Text style={{ color: "#191717", textAlign: "center" }}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </Layout>
  );
};

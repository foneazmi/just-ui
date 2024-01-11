import React from "react";
import { Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Layout } from "~/ui/components";
import { navigator } from "~/helpers";

export const ComingSoonScreen = () => {
  return (
    <Layout>
      <Pressable
        onPress={() => navigator.goBack()}
        style={{
          padding: 20,
        }}
      >
        <Feather name="chevron-left" size={20} />
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: 8,
          fontSize: 20,
        }}
      >
        {`⬅️ Coming Soon`}
      </Text>
    </Layout>
  );
};

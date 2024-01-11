import React from "react";
import { Text, View, Button, Pressable } from "react-native";
import { Layout } from "~/ui/components";
import { navigator } from "~/helpers";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

export const HelloAnimationScreen = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const handleReset = () => {
    width.value = withSpring(100);
  };

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: "violet",
            borderRadius: 10,
          }}
        />
        <Button onPress={handlePress} title="Click me" />
        <Button onPress={handleReset} title="Reset" />
      </View>
    </Layout>
  );
};

import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { Layout } from "~/ui/components";
import { navigator, width } from "~/helpers";
import { AntDesign, Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Constants from "expo-constants";

export const SharedElementDetailScreen = ({ route }: any) => {
  const { params } = route;

  const sv = useSharedValue(400);

  useEffect(() => {
    sv.value = withTiming(-20);
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    marginTop: withSpring(sv.value, {
      mass: 2,
      damping: 20,
    }),
  }));

  return (
    <Layout style={{ backgroundColor: "#FFFFFF" }} overflow>
      <Pressable
        onPress={() => navigator.goBack()}
        style={{
          position: "absolute",
          top: Constants.statusBarHeight + 20,
          left: 20,
          zIndex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Feather name="chevron-left" size={20} color="white" />
      </Pressable>
      <View>
        <Animated.Image
          sharedTransitionTag={`${params.title}-img`}
          source={{
            uri: params.image,
          }}
          style={{ width: width, height: 400 }}
        />

        <Animated.View
          sharedTransitionTag={`${params.title}-rating`}
          style={{
            position: "absolute",
            right: 16,
            bottom: 36,
            padding: 8,
            borderRadius: 20,
            zIndex: 1,
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
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
          },
          animatedStyles,
        ]}
      >
        <Text>Description</Text>
      </Animated.View>
    </Layout>
  );
};

import { router } from "expo-router";
import { Pressable, SafeAreaView, Text } from "react-native";

export default function () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable onPress={() => router.back()}>
        <Text>App1</Text>
      </Pressable>
    </SafeAreaView>
  );
}

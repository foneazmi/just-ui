import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Just UI</Text>
      <Pressable onPress={() => router.navigate("/")}>
        <Text>Click</Text>
      </Pressable>
    </View>
  );
}

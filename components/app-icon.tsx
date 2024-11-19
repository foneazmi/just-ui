import { width } from "@/utils/size";
import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const NUM_COLUMNS = 4;
const APP_SIZE = width / NUM_COLUMNS - 16;

export const AppIcon = () => (
  <Pressable
    onPress={() => router.navigate("/lorem")}
    style={{
      height: APP_SIZE,
      width: APP_SIZE,
      margin: 6,
      backgroundColor: "#00000010",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>App Name</Text>
  </Pressable>
);

export const AppList = () => (
  <View style={{ alignItems: "center", flex: 1 }}>
    <FlatList
      data={[1, 2, 3, 4, 5, 6]}
      numColumns={NUM_COLUMNS}
      renderItem={() => <AppIcon />}
    />
  </View>
);

import { width } from "@/utils/size";
import { Href, router } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const NUM_COLUMNS = 4;
const APP_SIZE = width / NUM_COLUMNS - 16;

export type AppIconProps = {
  label: string;
  path: Href;
  icon: string;
};
export const AppIcon = ({ label, path, icon }: AppIconProps) => (
  <Pressable
    onPress={() => router.navigate(path)}
    style={{
      height: APP_SIZE,
      width: APP_SIZE,
      margin: 6,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image source={{ uri: icon }} style={{ height: 50, width: 50 }} />
    <Text>{label}</Text>
  </Pressable>
);

export const AppList = ({ data }: { data: AppIconProps[] }) => (
  <View style={{ flex: 1, padding: 8 }}>
    <FlatList
      data={data}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => <AppIcon {...item} />}
    />
  </View>
);

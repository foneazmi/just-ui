import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Layout } from "~/ui/components";

const Header = () => (
  <View
    style={{ flexDirection: "row", alignItems: "center", marginVertical: 12 }}
  >
    <View style={{ gap: 4, flex: 1 }}>
      <Text style={{ color: "gray" }}>Location</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <MaterialCommunityIcons name="map-marker" size={20} />
        <Text style={{ fontWeight: "600" }}>Cairo, Egypt</Text>
        <MaterialCommunityIcons name="chevron-down" size={20} />
      </View>
    </View>
    <MaterialCommunityIcons name="bell-outline" size={24} />
  </View>
);

export const ShoppingStoreHomePage = () => {
  return (
    <Layout
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
      }}
    >
      <Header />
      <Text
        style={{
          marginTop: 8,
          fontWeight: "bold",
          fontSize: 36,
        }}
      >
        Find The Best Abaya That Fits You
      </Text>
    </Layout>
  );
};

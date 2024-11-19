import { Dimensions, Platform } from "react-native";
export const { height, width } = Dimensions.get("screen");

export const safeBottom = Platform.OS === "ios" ? 32 : 16;

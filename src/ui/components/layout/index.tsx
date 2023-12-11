import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  overflow?: Boolean;
}
export const Layout = (props: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: !props.overflow ? Constants.statusBarHeight : 0,
        },
        props?.style,
      ]}
    >
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <View
        style={{
          flex: 1,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

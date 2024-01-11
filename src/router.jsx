import React from "react";
import { navigationRef } from "./helpers";
import {
  HelloAnimationScreen,
  ComingSoonScreen,
  JustUIScreen,
  SharedElementScreen,
  SharedElementDetailScreen,
  LinkAjaScreen,
  ShoppingStoreScreen,
} from "./ui/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="just-ui" component={JustUIScreen} />
        <Stack.Screen name="hello-animation" component={HelloAnimationScreen} />
        <Stack.Screen name="coming-soon" component={ComingSoonScreen} />
        <Stack.Screen name="shared-element" component={SharedElementScreen} />
        <Stack.Screen
          name="shared-element-detail"
          component={SharedElementDetailScreen}
        />
        <Stack.Screen name="link-aja" component={LinkAjaScreen} />
        <Stack.Screen name="shopping-store" component={ShoppingStoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

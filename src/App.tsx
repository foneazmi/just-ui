import React from "react";
import { AppRouter } from "./router";
import { enableFreeze } from "react-native-screens";
enableFreeze(true);

export const App = () => {
  return <AppRouter />;
};

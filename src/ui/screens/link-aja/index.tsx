import React, { ReactNode, useRef } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  View,
  ViewStyle,
} from "react-native";
import { Layout } from "../../components";
const { width } = Dimensions.get("screen");

const headerHeight = 50;
const walletHeight = 180;
const paymentHeight = 80;

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

export const LinkAjaScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateWallet = scrollY.interpolate({
    inputRange: [0, headerHeight + walletHeight + paymentHeight - 64],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });
  const translatePayment = scrollY.interpolate({
    inputRange: [0, walletHeight + headerHeight],
    outputRange: [-16, -(walletHeight + headerHeight)],
    extrapolate: "clamp",
  });
  const translateContent = scrollY.interpolate({
    inputRange: [0, headerHeight + walletHeight],
    outputRange: [-16, -(headerHeight + walletHeight + paymentHeight)],
    extrapolate: "clamp",
  });
  const translateContentNegate = scrollY.interpolate({
    inputRange: [0, headerHeight + walletHeight],
    outputRange: [0, headerHeight + walletHeight],
    extrapolate: "clamp",
  });
  const Header = (props: Props) => (
    <Animated.View style={[styles.sectionHeader, props.style]}>
      {props.children}
    </Animated.View>
  );
  const Wallet = (props: Props) => (
    <Animated.View
      style={[
        styles.sectionWallet,
        { transform: [{ translateY: translateWallet }] },
        props.style,
      ]}
    >
      {props.children}
    </Animated.View>
  );
  const Payment = (props: Props) => (
    <Animated.View
      style={[
        styles.sectionPayment,
        { transform: [{ translateY: translatePayment }] },
        props.style,
      ]}
    >
      {props.children}
    </Animated.View>
  );

  const Content = (props: Props) => (
    <Animated.View
      style={[
        {
          transform: [{ translateY: translateContent }],
        },
        props.style,
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <Animated.View
          style={[
            {
              transform: [{ translateY: translateContentNegate }],
            },
          ]}
        >
          {props.children}
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header>
        <Image
          style={styles.photoProfileHeader}
          source={{
            uri: "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          }}
        />
        <Text style={styles.nameProfileHeader}>Farkhan Azmi</Text>
      </Header>
      <Wallet>
        <Text style={styles.nameWallet}>Wallet</Text>
      </Wallet>
      <Payment>
        <Text>Payment</Text>
      </Payment>
      <Content>
        <View style={{ padding: 20 }}>
          <Text>Test</Text>
        </View>
        {[...Array(50)].map((_, i) => {
          return <Text key={`${i}-item`}>{i}</Text>;
        })}
      </Content>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    backgroundColor: "white",
    paddingBottom: headerHeight + walletHeight + paymentHeight + 250,
  },
  sectionHeader: {
    backgroundColor: "white",
    height: headerHeight,
    width,
    alignItems: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  photoProfileHeader: {
    height: headerHeight - 16,
    width: headerHeight - 16,
    borderRadius: headerHeight - 16,
  },
  nameProfileHeader: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 8,
  },
  sectionWallet: {
    width,
    height: walletHeight,
    backgroundColor: "#D81E1F",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  nameWallet: {
    color: "white",
  },
  sectionPayment: {
    width,
    backgroundColor: "#F7F6FC",
    borderTopLeftRadius: 16,
    padding: 16,
    borderTopRightRadius: 16,
    height: paymentHeight,
  },
});

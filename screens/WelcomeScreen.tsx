import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { RootStackScreenProps } from "../types";

const WelcomeScreen = ({ navigation }: RootStackScreenProps<"Welcome">) => {
  const outerRingPadding = useSharedValue(0);
  const innerRingPadding = useSharedValue(0);

  useEffect(() => {
    outerRingPadding.value = 0;
    innerRingPadding.value = 0;

    setTimeout(() => {
      outerRingPadding.value = withSpring(outerRingPadding.value + hp(5));
    }, 100);
    setTimeout(() => {
      innerRingPadding.value = withSpring(innerRingPadding.value + hp(5.5));
    }, 300);
    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View className="flex-1 bg-[#CC6633] items-center justify-center">
      <StatusBar style="light" />
      <Animated.View
        style={{ padding: outerRingPadding }}
        className="rounded-full bg-white/20 items-center"
      >
        <Animated.View
          style={{ padding: innerRingPadding }}
          className=" rounded-full bg-white/20 items-center"
        >
          <Image
            style={{ width: hp(22), height: hp(22), borderRadius: 100 }}
            source={require("../assets/images/logo/logo-color.png")}
          />
        </Animated.View>
      </Animated.View>

      <Animated.View className="flex items-center space-y-2 pt-8">
        <Text
          style={{ fontSize: hp(3) }}
          className="text-[#336699] font-bold tracking-widest"
        >
          Flavor Fusion
        </Text>
        <Text
          style={{ fontSize: hp(1.5) }}
          className=" font-bold tracking-widest text-neutral-50"
        >
          Your ultimate recipe companion.
        </Text>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

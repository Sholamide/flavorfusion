import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";

const NotFoundScreen = ({ navigation }: RootStackScreenProps<"NotFound">) => {
  return (
    <View className="flex items-center justify-center p-5">
      <Text className="text-xl font-bold">This screen doesn't exist</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
        className="mt-3 pt-3"
      >
        <Text className="text-base text-[#2e78b7]">Go home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;

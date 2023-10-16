import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Category } from "../types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loader from "./Loader";
import { CachedImage } from "../helpers/image";

type CategoriesProps = {
  activeCategory: string;
  handleChangeCategory: (category: string) => void;
  categories: Category[];
};

const Categories = ({
  categories,
  activeCategory,
  handleChangeCategory,
}: CategoriesProps) => {
  return (
    <Animated.View entering={FadeInDown.duration(300).springify()}>
      <ScrollView
        className="space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories?.length == 0 ? (
          <Loader size="large" className="mt-20" />
        ) : (
          categories.map((category: Category, index: number) => {
            let isActive = category.strCategory == activeCategory;
            let activeButtonClass = isActive ? "bg-amber-400" : "bg-black/10";

            return (
              <TouchableOpacity
                className="flex space-y-1 items-center"
                key={index}
                onPress={() => handleChangeCategory(category.strCategory)}
              >
                <View className={"rounded-full p-[6px]" + activeButtonClass}>
                  <CachedImage
                    className="rounded-full"
                    style={{ width: hp(6), height: hp(6) }}
                    uri={category.strCategoryThumb}
                  />
                </View>
                <Text
                  className="text-neutral-600 font-semibold"
                  style={{ fontSize: hp(1.6) }}
                >
                  {category.strCategory}
                </Text>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;

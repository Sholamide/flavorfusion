import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Pressable } from "react-native";
import { BellIcon } from "react-native-heroicons/solid";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { CategoryProps, HomeScreenProps } from "../types";
import { TextInput } from "react-native";
import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import axios from "axios";
import Recipes from "../components/Recipes";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [activeCategory, setactiveCategory] = useState("Beef");
  const [categories, setcategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setcategories(response.data.categories);
      }
    } catch (error: any) {
      console.log("Error", error.message);
    }
  };

  const handleChangeCategory = (category: string) => {
    getRecipes(category);
    setactiveCategory(category);
    setMeals([]);
  };

  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (error: any) {
      console.log("Error", error.message);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        style={{ paddingTop: hp(6) }}
        className="space-y-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={{ marginHorizontal: hp(2), paddingBottom: hp(1) }}
          className="border-b border-neutral-200 flex-row justify-between items-center"
        >
          <Pressable>
            <UserCircleIcon size={40} color="#CC6633" />
          </Pressable>
          <Pressable>
            <BellIcon size={40} color="#CC6633" />
          </Pressable>
        </View>

        <View
          style={{
            marginHorizontal: hp(1.5),
            paddingVertical: hp(1.5),
            paddingLeft: hp(1.5),
            marginBottom: hp(0.5),
          }}
          className="space-y-2 border-l-4 border-[#CC6633]  mb-2"
        >
          <Text
            style={{ fontSize: hp(2.5), marginBottom: hp(1) }}
            className="font-bold tracking-wider text-[#545454]"
          >
            Hello, <Text className="font-bold text-[#336699]">Jessica</Text>
          </Text>
          <View className="space-y-3">
            <Text
              style={{ fontSize: hp(3) }}
              className="font-bold text-neutral-900"
            >
              Your ultimate recipe &nbsp;
              <Text className="text-amber-700">companion.</Text>
            </Text>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-medium text-neutral-900"
            >
              Where every meal begins...
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: hp(2),
            padding: hp(1),
          }}
          className="rounded-3xl justify-between  flex-row border-0 shadow-md  border-#CC6633 bg-[#fff]"
        >
          <TextInput
            className="text-xs"
            placeholderTextColor={"#171413"}
            placeholder="Enter name of recipe"
          />
          <View className="rounded-full p-1">
            <MagnifyingGlassIcon
              color={"#336699"}
              strokeWidth={2}
              size={hp(2.5)}
            />
          </View>
        </View>

        <View>
          <Categories
            activeCategory={activeCategory}
            categories={categories}
            handleChangeCategory={handleChangeCategory} 
          />
        </View>
        <View>
          <Recipes categories={categories} meals={meals} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

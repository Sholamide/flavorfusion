import { Image, Pressable, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { Recipe } from "../interfaces";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loader from "./Loader";
import { CachedImage } from "../helpers/image";
import { useNavigation } from "@react-navigation/native";
import { DetailsScreenProps, RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const RecipeCard = ({ item, index, navigation }) => {

  let isEven = index % 2 == 0;

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}

    >
      <Pressable
        key={item.strMeal}
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center items-center mb-4 space-y-1"
        onPress={()=> navigation.navigate('Details',{...item})}
      >
        <CachedImage uri = {item.strMealThumb} 
        style={{
          width: "100%",
          height: index % 3 == 0 ? hp(25) : hp(35),
          borderRadius: 35,
        }}
          className="bg-black/5 self-stretch"
          sharedTransitionTag = {item.strMeal}
          />
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-semibold ml-2 text-neutral-600"
        >
          {item.strMeal.length > 15
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const Recipes = ({ categories, meals }) => {
  const navigation = useNavigation();


  const renderItem = ({ item, i }) => {
    return <RecipeCard item={item} index={i} navigation={navigation} />;
  }; 

  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{ fontSize: hp(2) }}
        className="text-neutral-600 font-semibold"
      >
        Recipes
      </Text>
      <View>
        {categories.length == 0 || meals.length == 0 ? (
          <Loader size="large" className="mt-20" />
        ) : (
          <MasonryList
            keyExtractor={(item) => item.idMeal}
            ListHeaderComponent={<View />}
            contentContainerStyle={{
              paddingHorizontal: 24,
              alignSelf: "stretch",
            }}
            // onEndReached={() => console.log("onEndReached")}
            numColumns={2}
            data={meals}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

export default Recipes;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { RootStackParamList } from "../types";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Details" component={RecipeDetailsScreen} />
        <RootStack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "oops!" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

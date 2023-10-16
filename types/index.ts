import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Details: { recipe: any };
  NotFound: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;


export type Category = {
  idCategory: string | number,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
};

export type Meals = {
  idMeal: string
  strMeal: string;
  strMealThumb: string;

};

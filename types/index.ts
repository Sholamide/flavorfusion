import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Details: {recipe: any};
}

export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;



export type CategoryProps = {
  idCategory: string | number,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
};

export type RecipeProps = {
  image: string;
  title: string;
};

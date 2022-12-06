import * as React from "react";
import { View, Text } from "react-native";
import { StackNavigationProps } from "../../utils/types/navigationTypes";


interface HomeScreenProps {
    navigation: StackNavigationProps
}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View>
      <Text>This is my Home</Text>
    </View>
  );
};

export default HomeScreen;

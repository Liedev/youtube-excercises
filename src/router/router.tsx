import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/Home/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type StackNavigator = {
    Home: undefined;
    Drawer: undefined;
};

const AuthorizedStack = createNativeStackNavigator<StackNavigator>();
const UnAuthorizedStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeViews = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
);

const AuthorizedViews = () => (
    <AuthorizedStack.Navigator initialRouteName="Home">
        <AuthorizedStack.Screen
            name="Home"
            component={HomeViews}
            options={{ headerShown: false }}
        />
    </AuthorizedStack.Navigator>
);

export const createRootNavigator = () => {
    return (
        <>
            <NavigationContainer>
                <AuthorizedViews />
            </NavigationContainer>
        </>
    );
};

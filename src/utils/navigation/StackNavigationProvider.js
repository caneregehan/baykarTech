import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignUpPage from "../../pages/SignUp/SignUpPage";
import LoginPage from "../../pages/Login/LoginPage";
import DashboardPage from "../../pages/Dashboard/DashboardPage";
import ProfilePage from "../../pages/Profile/ProfilePage";
import HomePage from "../../pages/Home/HomePage";
import SettingsPage from "../../pages/Settings/SettingsPage";
import {
	NavigationContainer,
	createNavigationContainerRef,
} from "@react-navigation/native";

const Stack = createStackNavigator();
export const LoginStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={"Login"}>
			<Stack.Screen name={"LoginPage"}>
				{(props) => <LoginPage {...props} />}
			</Stack.Screen>

			<Stack.Screen name={"DashboardPage"}>
				{(props) => <DashboardPage {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

export const SignUpStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={"SignUp"}>
			<Stack.Screen name={"SignUpPage"}>
				{(props) => <SignUpPage {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};
export const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="HomePage"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"HomePage"}>
				{(props) => <HomePage {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};
export const SettingsStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="SettingsPage"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"SettingsPage"}>
				{(props) => <SettingsPage {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

export const DashboardStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="DashboardPage"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"DashboardPage"}>
				{(props) => <DashboardPage {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};
export const ProfileStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Profile"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"ProfilePage"}>
				{(props) => <ProfilePage {...props} />}
			</Stack.Screen>
			<Stack.Screen name={"LoginPage"}>
				{(props) => <LoginPage {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

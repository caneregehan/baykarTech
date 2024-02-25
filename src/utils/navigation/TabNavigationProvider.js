import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabMenu from "./components/TabMenu";
import {
	DashboardStack,
	ProfileStack,
	SettingsStack,
} from "./StackNavigationProvider";

const TabNavigation = createBottomTabNavigator();

export default function TabNavigationProvider() {
	return (
		<TabNavigation.Navigator
			tabBar={TabMenu}
			initialRouteName="HomeStack"
			screenOptions={{
				headerShown: false,
			}}>
			<TabNavigation.Screen name="DashboardStack" component={DashboardStack} />
			<TabNavigation.Screen name="ProfileStack" component={ProfileStack} />
			<TabNavigation.Screen name="SettingsStack" component={SettingsStack} />
		</TabNavigation.Navigator>
	);
}

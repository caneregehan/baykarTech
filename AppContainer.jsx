import MainLayout from "./src/layout/MainLayout";
import React, { useEffect, useState } from "react";
import { LoginStack } from "./src/utils/navigation/StackNavigationProvider";
import TabNavigationProvider from "./src/utils/navigation/TabNavigationProvider";

import { View } from "react-native";
import LoginPage from "./src/pages/Login/LoginPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppContainer() {
	const [isLogin, setisLogin] = useState(false);
	useEffect(() => {
		getUser();
	}, []);

	const getUser = async () => {
		const user = await AsyncStorage.getItem("isUser");
		console.log("user", user);
	};
	return (
		<View>
			{isLogin === true ? (
				<View>
					<MainLayout>
						<TabNavigationProvider />
					</MainLayout>
				</View>
			) : (
				<MainLayout>
					<TabNavigationProvider>
						<LoginStack />
					</TabNavigationProvider>
				</MainLayout>
			)}
		</View>
	);
}

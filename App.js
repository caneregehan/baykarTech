import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContainer from "./AppContainer";

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<AppContainer />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

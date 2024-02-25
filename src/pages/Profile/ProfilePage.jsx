import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function ProfilePage() {
	const navigation = useNavigation();
	const handleQuit = async () => {
		await AsyncStorage.setItem("isUser", "false");
		navigation.navigate("LoginPage");
	};
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					handleQuit();
				}}>
				<Text>Çıkış</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({});

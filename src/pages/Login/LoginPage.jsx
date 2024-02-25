import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	createNavigationContainerRef,
	useNavigation,
} from "@react-navigation/native";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation();

	useEffect(() => {
		get();
	}, [username]);

	const signIn = async (username, password) => {
		try {
			const userInfo = await AsyncStorage.getItem("user");
			if (userInfo !== null) {
				const savedUser = JSON.parse(userInfo);
				if (savedUser.name === username && savedUser.password === password) {
					await AsyncStorage.setItem("isUser", "true");
					navigation.navigate("DashboardPage", userInfo);
				} else {
					console.log("Kullanıcı adı veya şifre hatalı.");
				}
			} else {
				console.log("Kullanıcı bulunamadı.");
			}
		} catch (error) {
			console.log("Bilgiler alınırken hata oluştu:", error);
		}
	};

	const get = async () => {
		try {
			const userInfo = await AsyncStorage.getItem("user");
			if (userInfo !== null) {
				console.log("Kullanıcı bilgileri:", JSON.parse(userInfo));
			} else {
				console.log("Kullanıcı bulunamadı.");
			}
		} catch (error) {
			console.log("Bilgiler alınırken hata oluştu:", error);
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={setUsername}
				value={username}
				placeholder="Adınız"
			/>
			<TextInput
				style={styles.input}
				onChangeText={setPassword}
				value={password}
				placeholder="Şifre"
				secureTextEntry={true}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => signIn(username, password)}>
				<Text style={styles.buttonText}>Giriş</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		width: 300,
	},
	button: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
		width: 300,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},
});

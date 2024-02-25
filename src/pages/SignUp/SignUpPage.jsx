import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUpPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		try {
			const userInfo = {
				name: username,
				password: password,
			};

			await AsyncStorage.setItem("user", JSON.stringify(userInfo));

			console.log("Kullanıcı başarıyla kaydedildi.");
		} catch (error) {
			console.log("Kayıt işlemi başarısız oldu:", error);
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
			<TouchableOpacity style={styles.button} onPress={handleSignUp}>
				<Text style={styles.buttonText}>Kayıt Ol</Text>
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
		backgroundColor: "#007bff",
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

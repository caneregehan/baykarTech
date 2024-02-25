import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import {
	heightPercentageToDP,
	widthPercentageToDP,
} from "react-native-responsive-screen";
import HomeIcon from "../../../icoons/HomeIcon";
import UserIcon from "../../../icoons/UserIcon";
import HamburgerIcon from "../../../icoons/HamburgerIcon";
import SettingsIcon from "../../../icoons/SettingsIcon";

export default function TabMenu({ state, descriptors, navigation }) {
	return (
		<View style={styles.tabMenuContainer}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;
				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});
					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};
				return (
					<Pressable
						key={`${index}.${label}`}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						onPress={onPress}
						onLongPress={onLongPress}>
						<View style={styles.iconContainer}>
							{label === "HomeStack" ? (
								<HomeIcon fill={isFocused ? " blue" : "gray"} />
							) : label === "ProfileStack" ? (
								<UserIcon fill={isFocused ? "blue" : "gray"} />
							) : label === "DashboardStack" ? (
								<HamburgerIcon fill={isFocused ? "blue" : "gray"} />
							) : label === "SettingsStack" ? (
								<SettingsIcon fill={isFocused ? "blue" : "gray"} />
							) : null}
						</View>
					</Pressable>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabMenuContainer: {
		justifyContent: "center",
		flexDirection: "row",
		gap: widthPercentageToDP(10),
		height: heightPercentageToDP(10),
	},
	iconContainer: {
		width: widthPercentageToDP(6),
		justifyContent: "center",
	},
});

import React from "react";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { Platform, StatusBar, StyleSheet, useWindowDimensions, View } from "react-native";

export default function MainLayout({ children, onLayout = null }) {
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("#FFFFFF", true);
    StatusBar.setBarStyle("dark-content");
    StatusBar.setTranslucent(true);
  }

  StatusBar.setBarStyle("dark-content", true);

  return (
    <View style={styles.layout} onLayout={onLayout}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100) + StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight || heightPercentageToDP(5),
    backgroundColor: "#FFFFFF",
  },
});

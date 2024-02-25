import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export default function DashboardPage() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>Dashboard</Text>
      <View
        style={{
          gap: widthPercentageToDP(10),
          flexDirection: "row",
        }}>
        <View
          style={{
            width: widthPercentageToDP(30),
            height: heightPercentageToDP(20),
            backgroundColor: "gray",
            borderRadius: 10,
          }}>
          <Text>123</Text>
        </View>
        <View
          style={{
            width: widthPercentageToDP(30),
            height: heightPercentageToDP(20),
            backgroundColor: "yellow",
            borderRadius: 10,
          }}>
          <Text>123</Text>
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP(70),
          height: heightPercentageToDP(40),
          backgroundColor: "orange",
          borderRadius: 10,
        }}>
        <Text>123</Text>
      </View>
      <View
        style={{
          width: widthPercentageToDP(70),
          height: heightPercentageToDP(10),
          backgroundColor: "purple",
          borderRadius: 10,
        }}>
        <Text>123</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(14),
  },
});

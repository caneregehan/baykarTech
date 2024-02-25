import MainLayout from "./src/layout/MainLayout";
import React, { useEffect, useState } from "react";
import { LoginStack } from "./src/utils/navigation/StackNavigationProvider";
import TabNavigationProvider from "./src/utils/navigation/TabNavigationProvider";

import { View } from "react-native";
import LoginPage from "./src/pages/Login/LoginPage";

export default function AppContainer() {
  const [isLogin, setisLogin] = useState(true);
  console.log("isLogin", isLogin);
  return (
    <View>
      {isLogin === true ? (
        <View>
          <MainLayout>
            <TabNavigationProvider />
          </MainLayout>
        </View>
      ) : (
        <LoginPage />
      )}
    </View>
  );
}

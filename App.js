import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import AllExpenses from "./Screens/AllExpenses";
import EditExpenses from "./Screens/EditExpenses";
import Recent from "./Screens/Recent";
import HeaderButton from "./components/ReusableButton";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";

const MainStack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

const TapNavigator = () => {
  return (
    <Tap.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: "white",
        headerRight: ({ tintColor }) => (
          <HeaderButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <Tap.Screen
        name="RecentExpenses"
        component={Recent}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tap.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tap.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <MainStack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <MainStack.Screen
              name="Expenses"
              component={TapNavigator}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="ManageExpense"
              component={EditExpenses}
              options={{ title: "Manage Expense", presentation: "modal" }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

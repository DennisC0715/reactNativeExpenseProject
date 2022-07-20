import { View, StyleSheet, Text, Pressable } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
};

const ExpenseItem = ({ amount, descriptions, date, id }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: id });
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && css.pressed}
    >
      <View style={css.expenseItem}>
        <View>
          <Text style={[css.textBase, css.description]}>{descriptions}</Text>
          <Text style={css.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={css.priceContainer}>
          <Text style={css.price}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const css = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  priceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 90,
  },
  price: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});

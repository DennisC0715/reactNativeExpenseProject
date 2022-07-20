import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import ReusableButton from "../components/ReusableButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch } from "react-redux";
import { addExpense, deleteExpense, updateExpense } from "../Redux/reducers";

const EditExpenses = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId; //convert Value to boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const removeItem = () => {
    dispatch(deleteExpense(expenseId));
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };
  const addItem = () => {
    dispatch(
      addExpense({
        amount: 80.99,
        descriptions: "a bike",
        date: new Date("2022-07-19"),
      })
    );
    navigation.goBack();
  };

  const updateItem = () => {
    dispatch(updateExpense());
  };

  return (
    <View style={css.container}>
      <View style={css.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={{ width: "45%" }}>
          Cancel
        </Button>
        <Button
          onPress={isEditing ? updateItem : addItem}
          style={{ width: "45%" }}
        >
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={css.delete}>
          <ReusableButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={removeItem}
          />
        </View>
      )}
    </View>
  );
};

export default EditExpenses;

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  delete: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

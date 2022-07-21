import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import ReusableButton from "../components/ReusableButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense, updateExpense } from "../Redux/reducers";
import ExpenseForm from "../components/ManageInput/ExpenseForm";

const EditExpenses = ({ route, navigation }) => {
  const expenseData = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId; //convert Value to boolean
  const specificEditingItem = expenseData.find(
    (expense) => expense.id === expenseId
  );

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

  const confirmForm = (expenseData) => {
    if (isEditing) {
      dispatch(updateExpense({ id: expenseId, data: expenseData }));

      navigation.goBack();
    } else {
      dispatch(addExpense(expenseData));
      navigation.goBack();
    }
  };

  return (
    <View style={css.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmForm}
        isEditing={isEditing}
        editItem={specificEditingItem}
      />

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
});

import React from "react";
import { useSelector } from "react-redux";
import ExpenseOutput from "../components/ExpenseOutput";

const AllExpenses = () => {
  const expenseData = useSelector((state) => state.expense.expenses);

  return (
    <ExpenseOutput expenses={expenseData} expensesPeriod="Total" fallbackText="You don't have any expenses yet!"/>
  );
};

export default AllExpenses;

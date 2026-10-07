package com.spendx;

public class TransactionCalculator {

    public double calculateExpenses(double... amounts) {
        double total = 0;

        for (double amount : amounts) {
            if (amount > 0) {
                total += amount;
            }
        }

        return total;
    }

    public double calculateNetBalance(double income, double expenses) {
        return income - expenses;
    }

    public boolean isValidTransactionAmount(double amount) {
        return amount > 0;
    }
}
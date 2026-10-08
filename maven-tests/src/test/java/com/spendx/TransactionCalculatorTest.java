package com.spendx;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TransactionCalculatorTest {

    @Test
    void testCalculateExpenses() {
        TransactionCalculator calculator = new TransactionCalculator();

        double result = calculator.calculateExpenses(100, 250, 50);

        assertEquals(400, result);
    }

    @Test
    void testCalculateNetBalance() {
        TransactionCalculator calculator = new TransactionCalculator();

        double result = calculator.calculateNetBalance(5000, 1800);

        assertEquals(3200, result);
    }

    @Test
    void testValidTransactionAmount() {
        TransactionCalculator calculator = new TransactionCalculator();

        assertTrue(calculator.isValidTransactionAmount(500));
        assertFalse(calculator.isValidTransactionAmount(-100));
    }
}
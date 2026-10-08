package com.spendx;

import org.junit.Test;
import static org.junit.Assert.*;

public class SpendXTest {

    @Test
    public void testExpenseCalculation() {
        double income = 10000;
        double expense = 3500;

        double balance = income + expense;

        assertEquals(6500, balance, 0.01);
    }
}
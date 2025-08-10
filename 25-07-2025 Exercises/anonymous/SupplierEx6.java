package com.wipro.anonymous;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.function.Supplier;

public class SupplierEx6 {

	public static void main(String[] args) {
        Supplier<String> tomorrowDay = () -> {
            DayOfWeek day = LocalDate.now().plusDays(1).getDayOfWeek();
            return day.toString();
        };

        System.out.println("Tomorrow is - " + tomorrowDay.get());
    }

}


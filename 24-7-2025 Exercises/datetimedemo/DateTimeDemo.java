package com.wipro.datetimedemo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class DateTimeDemo {

//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//
//		LocalDate dt = LocalDate.now();
//		System.out.println(dt);
//		LocalDate dt1 = LocalDate.of(2025,6,12);
//		System.out.println(dt1);
//		
//		LocalDate dt2 = LocalDate.of(2025, Month.APRIL, 12);
//		System.out.println(dt2);
//		
//		LocalDate dt3 = LocalDate.ofEpochDay(1753248340);
//		System.out.println(dt3);
//		
//		LocalDateTime dtm1 = LocalDateTime.now();
//		System.out.println(dtm1);
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MM yyyy HH:mm:ss");
//		System.out.println(dtm1.format(formatter));
//		
//		LocalTime dtm2 = LocalTime.now();
//		System.out.println(dtm2);
//		
//		LocalDate dt5 = LocalDate.of(2023, Month.NOVEMBER, 1);

//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
//		System.out.println(dt5.format(formatter));
//		
		
		
		public static void main(String[] args) {
	        LocalDate dt6 = LocalDate.of(2002);
	        System.out.println(getAge(dt6));
	    }

	    public static int getAge(LocalDate dt) {
	        LocalDate currentDate = LocalDate.now();
	        int currentYear = currentDate.getYear();
	        int age = currentYear - dt;
	       
	    }
		
	}

}

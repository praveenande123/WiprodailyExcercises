//package com.wipro.anonymous;
//
//import java.util.function.Function;
//
//public class FunctionEx9 {
//
//	public static void main(String[] args) {
//		Function<Double, Double> fraction = fr -> {
//			
//			double fractionres = fr - Math.floor(fr);
//	        return Double.format("%.2f", fractionres);
//        };
//		
//		double number = 123.45;
//        double result = fraction.apply(number);
//
//        System.out.println("Fraction of " + number + " is " + result);
//	}
//
//}

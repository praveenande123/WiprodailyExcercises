package com.wipro.basic;

public class exerciseSix {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		float number = -0.5f;
		
		float i = Math.abs(number);
		if(number == 0) {
			System.out.println("Number is 0");
		}
		else if (number > 0) {
			System.out.println("Number is positve");
		}
		else  {
			System.out.println("Number is negative");
		}
		
		if(i < 1){
			System.out.println("Small");
		}
		else if(i >1000000){
			System.out.println("Large");
		}
		else {
			System.out.println("absValue else");
		}
	}

}

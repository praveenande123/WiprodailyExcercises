package com.wipro.anonymous;

public class LamdaEx3 {

	public static void main(String[] args) {
		
		Multiply multiply = (a,b) -> {
			return a*b;
		};
		
		int output = multiply.multiply(5, 5);
		System.out.println(output);

	}

}

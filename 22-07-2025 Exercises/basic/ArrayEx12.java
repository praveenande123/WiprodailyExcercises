package com.wipro.basic;

public class ArrayEx12 {

	public static void main(String[] args) {
		int[] numbers = {100, 67, 98, 678, 45, 123};
        int largest = numbers[0];

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }

        System.out.println(largest);
    }

	}


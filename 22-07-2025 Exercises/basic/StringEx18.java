package com.wipro.basic;

public class StringEx18 {

	public static void main(String[] args) {
		
		        String word = "Madam";

		        word = word.toLowerCase();

		        boolean isPalindrome = true;

		        for (int i = 0; i < word.length() / 2; i++) {
		            if (word.charAt(i) != word.charAt(word.length() - 1 - i)) {
		                isPalindrome = false;
		                break;
		            }
		        }

		        if (isPalindrome) {
		            System.out.println("palindrome.");
		        } else {
		            System.out.println("not a palindrome.");
		        }
		

	}

}

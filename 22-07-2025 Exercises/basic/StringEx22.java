package com.wipro.basic;

public class StringEx22 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String sentence = "anagram phrase formed rearranging letters different phrase";

        String[] words = sentence.split(" ");

        String shortest = words[0];

        for (int i = 1; i < words.length; i++) {
            if (words[i].length() < shortest.length()) {
                shortest = words[i];
            }
        }

        System.out.println("Shortest word: " + shortest);
//        System.out.println("Length: " + shortest.length());

	}

}

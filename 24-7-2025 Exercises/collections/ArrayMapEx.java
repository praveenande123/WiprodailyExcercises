package com.wipro.collections;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ArrayMapEx {

	public static void main(String[] args) {
		 List<String> names = new ArrayList<>();
	        names.add("Alice");
	        names.add("Bob");
	        names.add("Alice");
	        names.add("Charlie");
	        names.add("Bob");

	        System.out.println("Original List: " + names);

	        // Remove duplicates using a Set
	        Set<String> uniqueSet = new HashSet<>(names);
	        List<String> uniqueList = new ArrayList<>(uniqueSet);

	        System.out.println("List after removing duplicates: " + uniqueList);

	}

}

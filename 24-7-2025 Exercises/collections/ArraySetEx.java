package com.wipro.collections;

import java.util.HashSet;
import java.util.Set;

public class ArraySetEx {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        set1.add(1);
        set1.add(2);
        set1.add(3);
        set1.add(4);
        set1.add(5);

        set2.add(4);
        set2.add(5);
        set2.add(6);
        set2.add(7);

        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2); 

        System.out.println("Set1: " + set1);
        System.out.println("Set2: " + set2);
        System.out.println("Difference (Set1 - Set2): " + difference);
	}

}

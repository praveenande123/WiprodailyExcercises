package com.wipro.collections;

import java.util.ArrayList;

public class ArrayListExer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> list = new ArrayList<>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);
		list.add(5);
		
		System.out.println(list);
		list.remove(2);
		list.add(3);
		System.out.println(list);
		
	}

}

package com.wipro.collections;

public class GenDemoTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		GenDemo<Integer> demo = new GenDemo<Integer>(1);
//		GenDemo<String> demo1 = new GenDemo<String>("1");
		
		GenDemo2<String, Integer > g1 = new GenDemo2();
		g1.printData("Jan", 1);
		
		GenDemo2<String, String > g2 = new GenDemo2();
		g2.printData("yess", "Feb");
	}

}

package com.wipro.thread;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ThreadEx2 {
	public static void main(String[] args) {
		List<String> names = new ArrayList<>();
		names = Arrays.asList("Janhvee", "Aditi", "Harshini", "Arpita");
		
		
		Thread vowelThread = new Thread(new VowelThread(names));
		Thread consonantThread = new Thread(new ConsonantThread(names));
		
		vowelThread.start();
		consonantThread.start();
		
		try {
            vowelThread.join();
            consonantThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final List: " + names);
	}
}

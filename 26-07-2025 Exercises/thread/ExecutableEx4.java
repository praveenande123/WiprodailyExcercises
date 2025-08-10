package com.wipro.thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExecutableEx4 {

	public static void main(String[] args) {
		ExecutorService executor = Executors.newFixedThreadPool(5);
		
		for (int i = 1; i<=5; i++) {
			int task = i;
			executor.submit(() -> {
				for(int n = 1; n <= 10; n++) {
					System.out.println("Task " + task + " - Number -" + n);
					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			});
		}
		
		
		executor.shutdown();
		
		try {
            if (!executor.awaitTermination(20, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }

        System.out.println("All tasks completed.");
	}

}

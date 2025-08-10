package com.wipro.thread;

public class CounterThreadTest {

	public static void main(String[] args) {
		CounterEx3 counter = new CounterEx3(0);

		CounterThread t1 = new CounterThread(counter);
		CounterThread t2 = new CounterThread(counter);

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final output " + counter.getCount());
	}

}

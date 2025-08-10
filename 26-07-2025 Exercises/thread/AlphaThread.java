package com.wipro.thread;

public class AlphaThread extends Thread {
	@Override
    public void run() {
        for (char c = 'A'; c <= 'J'; c++) {
            System.out.println("Alphabet- " + c);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}

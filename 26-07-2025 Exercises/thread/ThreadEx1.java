package com.wipro.thread;

public class ThreadEx1 {

	public static void main(String[] args) {
		
		
		NumberThread numThread = new NumberThread();
        AlphaThread alphaThread = new AlphaThread();

        numThread.start(); 
        alphaThread.start(); 
	}

}
